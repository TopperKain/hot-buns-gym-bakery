const measurementId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID?.trim()

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let isInitialized = false

export const initializeGoogleAnalytics = () => {
  if (!measurementId || isInitialized || typeof window === 'undefined') {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId)

  isInitialized = true
}

export const trackEvent = (
  name: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (!measurementId || typeof window === 'undefined') {
    return
  }

  window.gtag?.('event', name, parameters)
}
