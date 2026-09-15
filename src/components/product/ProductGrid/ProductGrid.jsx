import { cn } from '@/utils/cn'

// Сетка карточек: 2 колонки (phone) → 3 (768) → 4 (1024) → 6 (desktop)
export default function ProductGrid({ className, children }) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-x-5 gap-y-[22px] md:grid-cols-3 md:gap-y-[41px] lg:grid-cols-4 xl:grid-cols-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
