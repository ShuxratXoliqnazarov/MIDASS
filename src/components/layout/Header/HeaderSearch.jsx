import { useState } from 'react'

import { SearchIcon } from '@/components/icons'
import { cn } from '@/utils/cn'

// Иконка поиска → по клику раскрывается поле «Поиск блюда» (UI kit → navigation, Skroll).
// TODO: подключить реальный поиск, когда появится страница результатов.
export default function HeaderSearch({ className }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn('relative size-6', className)}>
      {isOpen ? (
        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          className="absolute top-1/2 -right-3 -translate-y-1/2"
        >
          <input
            type="search"
            autoFocus
            placeholder="Поиск блюда"
            onBlur={() => setIsOpen(false)}
            onKeyDown={(event) => event.key === 'Escape' && setIsOpen(false)}
            className="h-[42px] w-[226px] bg-white pr-11 pl-[15px] text-[14px] leading-[17px] text-black outline-none placeholder:text-placeholder"
          />
          <SearchIcon className="pointer-events-none absolute top-1/2 right-3 size-6 -translate-y-1/2 text-black" />
        </form>
      ) : (
        <button
          type="button"
          aria-label="Поиск"
          onClick={() => setIsOpen(true)}
          className="block transition-colors hover:text-primary"
        >
          <SearchIcon className="size-6" />
        </button>
      )}
    </div>
  )
}
