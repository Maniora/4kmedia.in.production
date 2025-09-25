import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RouteScrollTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    // Jump to top on every route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default RouteScrollTop


