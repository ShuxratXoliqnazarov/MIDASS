import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import fireIcon from '@/assets/images/fire.webp'
import { ChevronIcon } from '@/components/icons'
import { HEADER_NAV } from '@/constants/navigation'
import { getCatalogPath } from '@/constants/routes'
import { cn } from '@/utils/cn'

const linkClassName = ({ isActive }) =>
  cn('flex items-center transition-colors hover:text-primary', isActive && 'text-primary')

// Навигация по категориям (desktop). «Горячее» и «Холодное» — выпадающие списки.
export default function HeaderNav({ className }) {
  const [openTitle, setOpenTitle] = useState(null)
  const { pathname } = useLocation()

  return (
    <nav className={cn('items-center gap-10 text-tiny uppercase', className)}>
      {HEADER_NAV.map((item) => {
        if (!item.children) {
          return (
            <NavLink
              key={item.title}
              to={getCatalogPath(item.category.slug)}
              className={linkClassName}
            >
              {item.title}
              {item.category.slug === 'promo' && (
                <img src={fireIcon} alt="" className="size-[18px]" />
              )}
            </NavLink>
          )
        }

        const isOpen = openTitle === item.title
        const hasActiveChild = item.children.some(
          (category) => pathname === getCatalogPath(category.slug),
        )

        return (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={() => setOpenTitle(item.title)}
            onMouseLeave={() => setOpenTitle(null)}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenTitle(isOpen ? null : item.title)}
              className={cn(
                'flex items-center gap-1 uppercase transition-colors hover:text-primary',
                (isOpen || hasActiveChild) && 'text-primary',
              )}
            >
              {item.title}
              <ChevronIcon
                className={cn('h-[6px] w-[10px] transition-transform', isOpen && 'rotate-180')}
              />
            </button>

            {isOpen && (
              <div className="absolute top-full -left-5 pt-5">
                <ul className="flex min-w-[236px] flex-col gap-5 bg-black p-5 text-[15px] leading-[18px] normal-case">
                  {item.children.map((category) => (
                    <li key={category.slug}>
                      <NavLink
                        to={getCatalogPath(category.slug)}
                        onClick={() => setOpenTitle(null)}
                        className={linkClassName}
                      >
                        {category.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
