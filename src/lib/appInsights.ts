import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const connectionString = import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING?.trim()

let appInsights: ApplicationInsights | null = null

export const initializeAppInsights = (): ApplicationInsights | null => {
  if (!connectionString) {
    return null
  }

  if (appInsights) {
    return appInsights
  }

  appInsights = new ApplicationInsights({
    config: {
      connectionString,
      // This app currently renders a single marketing page without client-side routes.
      enableAutoRouteTracking: false,
    },
  })

  appInsights.loadAppInsights()
  appInsights.trackPageView()

  return appInsights
}

export const trackEvent = (
  name: string,
  properties?: Record<string, string | number | boolean>
) => {
  appInsights?.trackEvent({ name }, properties)
}
