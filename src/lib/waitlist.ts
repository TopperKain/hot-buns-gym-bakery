export type WaitlistSubmissionResult = "subscribed" | "already_registered"

const defaultLocalApiUrl =
  typeof window !== "undefined" && window.location.hostname === "localhost"
    ? "http://localhost:7071/api/waitlist"
    : ""

const waitlistApiUrl =
  import.meta.env.VITE_WAITLIST_API_URL?.trim() || defaultLocalApiUrl

export const hasWaitlistApi = Boolean(waitlistApiUrl)

const getErrorMessage = async (response: Response): Promise<string> => {
  try {
    const body = await response.json()
    if (body && typeof body.message === "string" && body.message.trim()) {
      return body.message
    }
  } catch {
    // Intentionally ignore parse errors and fall back to plain text/status.
  }

  const text = await response.text()
  if (text.trim()) {
    return text
  }

  return `Request failed with status ${response.status}.`
}

export const submitWaitlistEmail = async (
  email: string
): Promise<WaitlistSubmissionResult> => {
  if (!waitlistApiUrl) {
    throw new Error("Waitlist service is unavailable right now.")
  }

  const response = await fetch(waitlistApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email }),
  })

  if (response.status === 409) {
    return "already_registered"
  }

  if (!response.ok) {
    throw new Error(await getErrorMessage(response))
  }

  return "subscribed"
}
