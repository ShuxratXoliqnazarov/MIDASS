import { NavLink, useLocation } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/cn'

const STEPS = [
  { title: '01. Контактные данные', to: ROUTES.CHECKOUT_CONTACTS },
  { title: '02. Способ доставки', to: ROUTES.CHECKOUT_DELIVERY },
  { title: '03. Оплата', to: ROUTES.CHECKOUT_PAYMENT },
]

// Зелёная галочка у уже пройденных шагов (Figma: Desktop_Оф.Заказа_Оплата)
function DoneBadge() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 shrink-0">
      <circle cx="8" cy="8" r="8" fill="#22C55E" />
      <path
        d="M4.5 8.2L6.8 10.5L11.5 5.5"
        stroke="#fff"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// «01. Контактные данные✓ » 02. Способ доставки✓ » 03. Оплата» — текущий шаг белый,
// пройденные — с галочкой, остальные приглушены.
export default function StepsNav({ className }) {
  const { pathname } = useLocation()
  const currentIndex = STEPS.findIndex((step) => step.to === pathname)

  return (
    <ol
      className={cn(
        'flex flex-wrap items-center gap-x-3 gap-y-2 text-caption md:text-body',
        className,
      )}
    >
      {STEPS.map((step, index) => (
        <li key={step.to} className="flex items-center gap-x-2">
          <NavLink
            to={step.to}
            className={({ isActive }) =>
              cn('transition-colors', isActive ? 'text-white' : 'text-muted hover:text-white')
            }
          >
            {step.title}
          </NavLink>

          {currentIndex >= 0 && index < currentIndex && <DoneBadge />}

          {index < STEPS.length - 1 && (
            <span className="ml-1 text-muted" aria-hidden="true">
              »
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}
