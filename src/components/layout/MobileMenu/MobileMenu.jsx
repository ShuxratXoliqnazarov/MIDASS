import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ChevronIcon, SearchIcon } from '@/components/icons'
import Container from '@/components/ui/Container'
import { HEADER_NAV } from '@/constants/navigation'
import { getCatalogPath } from '@/constants/routes'
import { cn } from '@/utils/cn'

// Figma: «Меню» (Phone), «Tablet_Меню». Открывается из Header на экранах < 1280px.
export default function MobileMenu({ isOpen, onClose }) {
  const [openGroups, setOpenGroups] = useState(['Горячее'])

  // пока меню открыто: страница не скроллится, Esc закрывает
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => event.key === 'Escape' && onClose()

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const toggleGroup = (title) =>
    setOpenGroups((groups) =>
      groups.includes(title) ? groups.filter((group) => group !== title) : [...groups, title],
    )

  return (
    <div className="xl:hidden">
      <div aria-hidden="true" onClick={onClose} className="fixed inset-0 -z-10 bg-black/80" />

      <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-100%)] overflow-y-auto pb-10">
        <Container>
          <div className="mx-auto max-w-[330px] pt-[17px] md:ml-[196px]">
            <form role="search" onSubmit={(event) => event.preventDefault()} className="relative">
              <input
                type="search"
                placeholder="Поиск блюда"
                className="h-[42px] w-full bg-white pr-12 pl-4 text-[14px] leading-[17px] text-black outline-none placeholder:text-placeholder"
              />
              <SearchIcon className="pointer-events-none absolute top-1/2 right-[14px] size-6 -translate-y-1/2 text-black" />
            </form>

            <ul className="mt-[13px] text-[14px] leading-[17px]">
              {HEADER_NAV.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.title} className="border-b border-line-dark">
                      <MenuLink category={item.category} title={item.title} onClick={onClose} />
                    </li>
                  )
                }

                const isGroupOpen = openGroups.includes(item.title)

                return (
                  <li key={item.title} className="border-b border-line-dark">
                    <button
                      type="button"
                      aria-expanded={isGroupOpen}
                      onClick={() => toggleGroup(item.title)}
                      className={cn(
                        'flex h-[49px] w-full items-center pl-[55px] uppercase transition-colors hover:text-primary',
                        isGroupOpen ? 'text-placeholder' : 'text-white',
                      )}
                    >
                      <span className="flex w-[47px] justify-center">
                        <ChevronIcon
                          className={cn(
                            'h-[10px] w-[15px] transition-transform',
                            isGroupOpen && 'rotate-180',
                          )}
                        />
                      </span>
                      <span className="ml-[14px]">{item.title}</span>
                      <span className="ml-2 text-[10px] leading-3 text-primary normal-case">
                        {item.children.length} шт
                      </span>
                    </button>

                    {isGroupOpen && (
                      <ul className="pb-3">
                        {item.children.map((category) => (
                          <li key={category.slug}>
                            <MenuLink category={category} onClick={onClose} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  )
}

function MenuLink({ category, title = category.title, onClick }) {
  return (
    <NavLink
      to={getCatalogPath(category.slug)}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'flex h-[49px] items-center pl-[55px] transition-colors hover:text-primary',
          isActive && 'text-primary',
        )
      }
    >
      <span className="flex w-[47px] justify-center">
        {category.icon && <img src={category.icon} alt="" style={{ width: category.iconWidth }} />}
      </span>
      <span className="ml-[14px]">{title}</span>
    </NavLink>
  )
}
