import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// При переходе на другую страницу прокручивает окно наверх
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
