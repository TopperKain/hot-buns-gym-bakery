import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsightsLogPrefix = '[analytics][app-insights]'
const connectionString = import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING?.trim()

let appInsights: ApplicationInsights | null = null

export const initializeAppInsights = (): ApplicationInsights | null => {
  if (!connectionString) {
    console.info(`${appInsightsLogPrefix} skipped: VITE_APPINSIGHTS_CONNECTION_STRING is not set`)
    return null
  }

  if (appInsights) {
    console.info(`${appInsightsLogPrefix} already initialized`)
    return appInsights
  }

  appInsights = new ApplicationInsights({
    config: {
      connectionString,
      // This app currently renders a single marketing page without client-side routes.
      enableAutoRouteTracking: false,
    },
  })

  try {
    appInsights.loadAppInsights()
    console.info(`${appInsightsLogPrefix} SDK loaded successfully`)

    appInsights.trackPageView()
    console.info(`${appInsightsLogPrefix} page view tracked successfully`)
  } catch (error) {
    console.error(`${appInsightsLogPrefix} failed to initialize`, error)
    appInsights = null
    return null
  }

  console.info(`${appInsightsLogPrefix} initialized successfully`)

  return appInsights
}

export const trackEvent = (
  name: string,
  properties?: Record<string, string | number | boolean>
) => {
  appInsights?.trackEvent({ name }, properties)
}
