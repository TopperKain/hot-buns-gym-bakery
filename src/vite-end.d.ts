/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPINSIGHTS_CONNECTION_STRING?: string
  readonly VITE_WAITLIST_API_URL?: string
  readonly VITE_SOCIAL_INSTAGRAM_URL?: string
  readonly VITE_SOCIAL_X_URL?: string
  readonly VITE_SOCIAL_FACEBOOK_URL?: string
  readonly VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
