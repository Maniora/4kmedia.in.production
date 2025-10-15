import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const MEASUREMENT_ID = 'G-1E1477LXDR'

function sendPageView(path) {
  if (typeof window === 'undefined') return
  const gtag = window.gtag
  if (typeof gtag !== 'function') return
  gtag('config', MEASUREMENT_ID, {
    page_path: path
  })
}

const Analytics = () => {
  const location = useLocation()

  useEffect(() => {
    sendPageView(location.pathname + location.search)
  }, [location.pathname, location.search])

  return null
}

export default Analytics


