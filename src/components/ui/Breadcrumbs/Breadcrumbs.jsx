import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { cn } from '@/utils/cn'

// Хлебные крошки «Главная / Горячие блюда».
// items: [{ title, to }], у последнего пункта `to` не нужен.
export default function Breadcrumbs({ items, className }) {
  return (
    <nav aria-label="Хлебные крошки" className={className}>
      <ol className="flex flex-wrap items-center gap-x-[11px] text-tiny md:text-caption md:leading-4">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <Fragment key={item.title}>
              <li>
                {isLast || !item.to ? (
                  <span aria-current={isLast ? 'page' : undefined}>{item.title}</span>
                ) : (
                  <Link to={item.to} className="transition-colors hover:text-primary">
                    {item.title}
                  </Link>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className={cn('text-white')}>
                  /
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
