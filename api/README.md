# Waitlist API (Azure Functions)

This folder contains the backend for waitlist signup.

## Endpoint

- `POST /api/waitlist`
- Request body: `{ "email": "user@example.com" }`
- Responses:
  - `201` success
  - `409` already registered
  - `400` invalid payload/email
  - `503` storage auth/config unavailable
  - `500` unexpected error

## Local development

1. Copy `local.settings.sample.json` to `local.settings.json`.
2. Fill required values:
   - `WAITLIST_TABLE_ACCOUNT_URL`
   - optional `WAITLIST_TABLE_NAME`
   - optional `WAITLIST_CORS_ORIGIN`
3. Install dependencies:
   - `npm --prefix api install`
4. Start function app:
   - `npm run dev:api`

The frontend automatically targets `http://localhost:7071/api/waitlist` when running on localhost and `VITE_WAITLIST_API_URL` is not set.

## Azure configuration

Required app settings for deployed Function App:

- `WAITLIST_TABLE_ACCOUNT_URL` (for example `https://<account>.table.core.windows.net`)
- `WAITLIST_TABLE_NAME` (optional, defaults to `waitlist`)
- `WAITLIST_CORS_ORIGIN` (optional; set to `https://hotbunsgym.com` for production)

Grant the Function App managed identity **Storage Table Data Contributor** on the target Storage Account.
