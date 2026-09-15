import { Link, NavLink } from 'react-router-dom'

import Container from '@/components/ui/Container'
import { HEADER_NAV } from '@/constants/navigation'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/cn'

// TODO: сверстать по макету (Figma: компонент «Header», UI kit → navigation).
// Сейчас это минимальный каркас, чтобы можно было ходить по страницам.
// Внутри хедера на мобилке/планшете открывается <MobileMenu /> (Figma: «Меню»).
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark">
      <Container className="flex h-[65px] items-center justify-between gap-6">
        <Link to={ROUTES.HOME} className="text-2xl font-extrabold">
          MIDAS
        </Link>

        <nav className="hidden gap-6 lg:flex">
          {HEADER_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn('text-tiny uppercase hover:text-primary', isActive && 'text-primary')
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        <Link to={ROUTES.CART} className="text-caption uppercase hover:text-primary">
          Корзина
        </Link>
      </Container>
    </header>
  )
}
