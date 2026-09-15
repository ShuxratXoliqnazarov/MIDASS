import { useEffect, useRef, useState } from 'react'

import { ChevronIcon } from '@/components/icons'
import { cn } from '@/utils/cn'

import { SORT_OPTIONS } from '../sortOptions'

// «Сортировать: по возрастанию цены ⌄» с выпадающим списком
export default function SortSelect({ value, onChange, className }) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)
  const current = SORT_OPTIONS.find((option) => option.id === value)

  // клик мимо списка закрывает его
  useEffect(() => {
    if (!isOpen) return

    const handleClick = (event) => {
      if (!rootRef.current.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  return (
    <div
      ref={rootRef}
      className={cn(
        'relative text-[11px] leading-[13px] tracking-[0.055em] uppercase md:text-caption md:leading-4',
        className,
      )}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="group flex items-center uppercase"
      >
        <span className="text-muted">Сортировать:</span>
        <span className="ml-[9px] transition-colors group-hover:text-primary">{current.title}</span>
        <ChevronIcon
          className={cn('ml-[5px] h-[6px] w-[9px] transition-transform', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute top-full left-0 z-20 mt-3 flex min-w-full flex-col gap-4 bg-black p-5 md:right-0 md:left-auto"
        >
          {SORT_OPTIONS.map((option) => (
            <li key={option.id} role="option" aria-selected={option.id === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(option.id)
                  setIsOpen(false)
                }}
                className={cn(
                  'whitespace-nowrap uppercase transition-colors hover:text-primary',
                  option.id === value && 'text-primary',
                )}
              >
                {option.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
