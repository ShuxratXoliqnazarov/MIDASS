import { BasketIcon } from '@/components/icons'
import { cn } from '@/utils/cn'

// Жёлтая квадратная кнопка «в корзину» (UI kit → btn: active / hover / click)
export default function BasketButton({ onClick, label = 'Добавить в корзину', className }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        'flex size-[39px] items-center justify-center bg-primary text-black shadow-button transition-colors hover:bg-primary-hover active:bg-black active:text-primary md:size-[42px]',
        className,
      )}
    >
      <BasketIcon className="h-[23px] w-[25px] md:h-6 md:w-[26px]" />
    </button>
  )
}
