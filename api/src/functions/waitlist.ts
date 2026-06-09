import { TableClient } from '@azure/data-tables'
import {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
  app,
} from '@azure/functions'
import { DefaultAzureCredential } from '@azure/identity'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const WAITLIST_PARTITION_KEY = 'waitlist'
const WAITLIST_TABLE_NAME = process.env.WAITLIST_TABLE_NAME?.trim() || 'waitlist'
const WAITLIST_TABLE_ACCOUNT_URL = process.env.WAITLIST_TABLE_ACCOUNT_URL?.trim()
const WAITLIST_CORS_ORIGIN = process.env.WAITLIST_CORS_ORIGIN?.trim()

type WaitlistRequestBody = {
  email?: unknown
}

type WaitlistEntity = {
  partitionKey: string
  rowKey: string
  email: string
  createdAt: string
  userAgent: string
}

type TableError = {
  statusCode?: number
  code?: string
}

let tableClient: TableClient | null = null
let tableReadyPromise: Promise<void> | null = null

const isTableError = (error: unknown): error is TableError =>
  typeof error === 'object' && error !== null

const getTableClient = (): TableClient => {
  if (!WAITLIST_TABLE_ACCOUNT_URL) {
    throw new Error('WAITLIST_TABLE_ACCOUNT_URL is not configured.')
  }

  if (!tableClient) {
    tableClient = new TableClient(
      WAITLIST_TABLE_ACCOUNT_URL,
      WAITLIST_TABLE_NAME,
      new DefaultAzureCredential()
    )
  }

  return tableClient
}

const ensureTableExists = async (client: TableClient): Promise<void> => {
  if (!tableReadyPromise) {
    tableReadyPromise = client.createTable().catch((error: unknown) => {
      if (isTableError(error) && error.statusCode === 409) {
        return
      }

      tableReadyPromise = null
      throw error
    })
  }

  await tableReadyPromise
}

const getCorsHeaders = (request: HttpRequest): HeadersInit => {
  if (!WAITLIST_CORS_ORIGIN) {
    return {}
  }

  const requestOrigin = request.headers.get('origin')
  if (requestOrigin !== WAITLIST_CORS_ORIGIN) {
    return {}
  }

  return {
    'Access-Control-Allow-Origin': WAITLIST_CORS_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  }
}

const jsonResponse = (
  request: HttpRequest,
  status: number,
  body: Record<string, string>
): HttpResponseInit => ({
  status,
  headers: {
    'Content-Type': 'application/json',
    ...getCorsHeaders(request),
  },
  jsonBody: body,
})

const normalizeEmail = (email: string): string => email.trim().toLowerCase()

const buildRowKey = (email: string): string =>
  Buffer.from(email, 'utf8').toString('base64url')

const handleWaitlist = async (
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> => {
  if (request.method === 'OPTIONS') {
    return {
      status: 204,
      headers: getCorsHeaders(request),
    }
  }

  let requestBody: WaitlistRequestBody
  try {
    requestBody = (await request.json()) as WaitlistRequestBody
  } catch {
    return jsonResponse(request, 400, { message: 'Request body must be valid JSON.' })
  }

  if (typeof requestBody.email !== 'string') {
    return jsonResponse(request, 400, { message: 'Email is required.' })
  }

  const normalizedEmail = normalizeEmail(requestBody.email)
  if (!EMAIL_PATTERN.test(normalizedEmail)) {
    return jsonResponse(request, 400, { message: 'Email address is invalid.' })
  }

  try {
    const client = getTableClient()
    await ensureTableExists(client)

    const entity: WaitlistEntity = {
      partitionKey: WAITLIST_PARTITION_KEY,
      rowKey: buildRowKey(normalizedEmail),
      email: normalizedEmail,
      createdAt: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') ?? 'unknown',
    }

    await client.createEntity(entity)

    context.log(`Waitlist signup saved for ${normalizedEmail}`)
    return jsonResponse(request, 201, { message: 'Successfully added to waitlist.' })
  } catch (error: unknown) {
    if (isTableError(error) && error.statusCode === 409) {
      return jsonResponse(request, 409, { message: 'Email is already registered.' })
    }

    if (isTableError(error) && error.statusCode === 403) {
      context.error('Storage access denied. Check managed identity and table permissions.', error)
      return jsonResponse(request, 503, {
        message: 'Waitlist service is temporarily unavailable.',
      })
    }

    context.error('Unexpected waitlist API failure.', error)
    return jsonResponse(request, 500, {
      message: 'Unexpected server error. Please try again later.',
    })
  }
}

app.http('waitlist', {
  methods: ['POST', 'OPTIONS'],
  authLevel: 'anonymous',
  route: 'waitlist',
  handler: handleWaitlist,
})
