const googleAnalyticsScriptId = 'google-analytics-script'
const googleAnalyticsLogPrefix = '[analytics][google]'

let googleAnalyticsInitialized = false
type GtagCall = [string, ...unknown[]]

declare global {
  interface Window {
    dataLayer: GtagCall[]
    gtag?: (...args: GtagCall) => void
  }
}

export const initializeGoogleAnalytics = (): boolean => {
  const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID?.trim()

  if (typeof window === 'undefined') {
    console.info(`${googleAnalyticsLogPrefix} skipped: window is unavailable`)
    return false
  }

  if (!measurementId) {
    console.info(`${googleAnalyticsLogPrefix} skipped: VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID is not set`)
    return false
  }

  if (googleAnalyticsInitialized) {
    console.info(`${googleAnalyticsLogPrefix} already initialized`)
    return false
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: GtagCall) => {
    window.dataLayer.push(args)
  }

  const existingScript = document.getElementById(googleAnalyticsScriptId)

  if (!existingScript) {
    const script = document.createElement('script')
    script.id = googleAnalyticsScriptId
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
    script.addEventListener('load', () => {
      console.info(`${googleAnalyticsLogPrefix} script loaded successfully`)
    })
    script.addEventListener('error', () => {
      console.error(`${googleAnalyticsLogPrefix} script failed to load`)
    })
    document.head.appendChild(script)
  } else {
    console.info(`${googleAnalyticsLogPrefix} script tag already exists`)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId)
  googleAnalyticsInitialized = true

  console.info(`${googleAnalyticsLogPrefix} initialized successfully with measurement ID ${measurementId}`)

  return true
}
