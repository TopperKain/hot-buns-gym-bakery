import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'
import { initializeAppInsights } from './lib/appInsights'
import { initializeGoogleAnalytics } from './lib/googleAnalytics'

import "./main.css"
import "./styles/theme.css"
import "./index.css"

initializeAppInsights()
initializeGoogleAnalytics()

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
   </ErrorBoundary>
)
