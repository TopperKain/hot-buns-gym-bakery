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

If either value is not set, that analytics provider is skipped.
