import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

import { BurgerIcon, CloseIcon, Logo, UserIcon } from '@/components/icons'
import MobileMenu from '@/components/layout/MobileMenu'
import Container from '@/components/ui/Container'
import { ROUTES } from '@/constants/routes'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/utils/cn'

import HeaderCart from './HeaderCart'
import HeaderNav from './HeaderNav'
import HeaderSearch from './HeaderSearch'

// Figma: компонент «Header» + UI kit → navigation.
// Вверху страницы хедер прозрачный, при скролле — компактный чёрный.
// Меньше 1280px вместо навигации кнопка «Меню» → <MobileMenu />.
export default function Header() {
  const isScrolled = useScrolled()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  return (
    <>
      {/* хедер fixed — этот блок держит под ним место */}
      <div aria-hidden="true" className="h-[var(--header-h)]" />

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          isScrolled || isMenuOpen ? 'bg-black' : 'bg-transparent',
        )}
      >
        <Container
          className={cn(
            'relative flex items-center transition-[height] duration-300',
            isScrolled ? 'h-[66px] md:h-[70px]' : 'h-[var(--header-h)]',
          )}
        >
          <Link to={ROUTES.HOME} aria-label="MIDAS — на главную" onClick={closeMenu}>
            <Logo className="h-4 w-[88px] md:h-[30px] md:w-[169px]" />
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3 text-tiny uppercase transition-colors hover:text-primary md:static md:ml-[82px] md:translate-x-0 xl:hidden"
          >
            {isMenuOpen ? (
              <CloseIcon className="size-7 text-primary" />
            ) : (
              <BurgerIcon className="h-4 w-[37px]" />
            )}
            <span className="hidden md:inline">Меню</span>
          </button>

          <HeaderNav className="mx-auto hidden xl:flex" />

          <div className="ml-auto flex items-center gap-9 md:gap-10">
            <HeaderSearch className="hidden md:block" />

            <button
              type="button"
              aria-label="Личный кабинет"
              className="transition-colors hover:text-primary"
            >
              <UserIcon className="h-6 w-[15px]" />
            </button>

            <HeaderCart />
          </div>
        </Container>

        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </header>
    </>
  )
}
