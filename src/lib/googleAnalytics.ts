const googleAnalyticsScriptId = 'google-analytics-script'

let googleAnalyticsInitialized = false

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const initializeGoogleAnalytics = (): boolean => {
  const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID?.trim()

  if (!measurementId || googleAnalyticsInitialized || typeof window === 'undefined') {
    return false
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }

  const existingScript = document.getElementById(googleAnalyticsScriptId)

  if (!existingScript) {
    const script = document.createElement('script')
    script.id = googleAnalyticsScriptId
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
    document.head.appendChild(script)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId)
  googleAnalyticsInitialized = true

  return true
}
