import { useEffect, useState } from 'react'

// true, когда страница прокручена дальше offset пикселей
export function useScrolled(offset = 10) {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > offset)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > offset)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return isScrolled
}
