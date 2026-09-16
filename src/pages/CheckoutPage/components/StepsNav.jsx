import { NavLink } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/cn'

const STEPS = [
  { title: '01. Контактные данные', to: ROUTES.CHECKOUT_CONTACTS },
  { title: '02. Способ доставки', to: ROUTES.CHECKOUT_DELIVERY },
  { title: '03. Оплата', to: ROUTES.CHECKOUT_PAYMENT },
]

// «01. Контактные данные » 02. Способ доставки » 03. Оплата» — текущий шаг белый, остальные приглушены.
export default function StepsNav({ className }) {
  return (
    <ol
      className={cn(
        'flex flex-wrap items-center gap-x-3 gap-y-2 text-caption md:text-body',
        className,
      )}
    >
      {STEPS.map((step, index) => (
        <li key={step.to} className="flex items-center gap-x-3">
          <NavLink
            to={step.to}
            className={({ isActive }) =>
              cn('transition-colors', isActive ? 'text-white' : 'text-muted hover:text-white')
            }
          >
            {step.title}
          </NavLink>

          {index < STEPS.length - 1 && (
            <span className="text-muted" aria-hidden="true">
              »
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}
