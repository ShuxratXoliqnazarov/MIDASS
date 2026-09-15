import { ArrowIcon } from '@/components/icons'
import { cn } from '@/utils/cn'

// Круглая стрелка слайдера (UI kit → elements). direction: 'prev' | 'next'
export default function SliderArrow({ direction = 'next', disabled, onClick, className }) {
  const isPrev = direction === 'prev'

  return (
    <button
      type="button"
      aria-label={isPrev ? 'Назад' : 'Вперёд'}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'flex size-[39px] items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-dark disabled:pointer-events-none disabled:opacity-30 md:size-14',
        className,
      )}
    >
      <ArrowIcon className={cn('h-3 w-5 md:h-[17px] md:w-[29px]', isPrev && 'rotate-180')} />
    </button>
  )
}
