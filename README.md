# ✨ Welcome to Your Spark Template!
You've just launched your brand-new Spark Template Codespace — everything’s fired up and ready for you to explore, build, and create with Spark!

This template is your blank canvas. It comes with a minimal setup to help you get started quickly with Spark development.

🚀 What's Inside?
- A clean, minimal Spark environment
- Pre-configured for local development
- Ready to scale with your ideas
  
🧠 What Can You Do?

Right now, this is just a starting point — the perfect place to begin building and testing your Spark applications.

🧹 Just Exploring?
No problem! If you were just checking things out and don’t need to keep this code:

- Simply delete your Spark.
- Everything will be cleaned up — no traces left behind.

📄 License For Spark Template Resources 

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.

## Analytics

This repo now supports client-side telemetry through Azure Application Insights and Google Analytics.

1. Create an Application Insights resource in Azure and copy its **connection string**.
2. Create a Google Analytics 4 property and copy its **measurement ID**.
3. Add a local `.env` file (already gitignored) with:
   - `VITE_APPINSIGHTS_CONNECTION_STRING=InstrumentationKey=...;IngestionEndpoint=...`
   - `VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID=G-XXXXXXXXXX`
4. Restart the dev server after changing environment variables.

If `VITE_APPINSIGHTS_CONNECTION_STRING` is not set, telemetry initialization is skipped.

If `VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID` is not set, Google Analytics initialization is skipped.

## Waitlist API configuration (required for GitHub Pages)

The waitlist form now posts to an external API endpoint so it works on static hosting.

Set this repository variable in GitHub:

- `WAITLIST_API_URL` -> your public waitlist POST endpoint URL

The frontend expects:

- `POST {WAITLIST_API_URL}`
- Request JSON body: `{ "email": "user@example.com" }`
- `2xx` => success
- `409` => already registered
- other non-2xx => error message (optional JSON `{ "message": "..." }`)

If `WAITLIST_API_URL` is missing, the signup button is disabled and the UI shows an unavailable message.

### API implementation in this repository

The backend is now included under `api/` as an Azure Functions app. See `api/README.md` for setup and deployment details.

- Build API: `npm run build:api`
- Run API locally: `npm run dev:api`

When the frontend runs on localhost and `VITE_WAITLIST_API_URL` is not set, it defaults to:

- `http://localhost:7071/api/waitlist`

## Optional social link configuration

Set these repository variables to enable social icons in the footer:

- `SOCIAL_INSTAGRAM_URL`
- `SOCIAL_X_URL`
- `SOCIAL_FACEBOOK_URL`

If not set, the footer shows "Social profiles coming soon."
