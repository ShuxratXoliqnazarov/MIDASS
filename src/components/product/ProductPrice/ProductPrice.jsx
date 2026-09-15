import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/formatPrice'

// Цена блюда. Варианты из макета:
//   470 ₽            — обычная
//   620 ₽ (зачёркн.) — oldPrice, скидка
//   495 ₽
//   410 ₽ –          — priceFrom, у блюда несколько видов
//   430 ₽
export default function ProductPrice({ price, oldPrice, priceFrom, className }) {
  const secondLine = 'text-[15px] font-semibold leading-[18px] md:text-[18px] md:leading-[22px]'

  return (
    <div className={cn('flex flex-col whitespace-nowrap', className)}>
      {oldPrice && <s className={cn(secondLine, 'opacity-80')}>{formatPrice(oldPrice)}</s>}
      {priceFrom && <span className={secondLine}>{formatPrice(priceFrom)} –</span>}
      <span className="text-[17px] leading-[21px] font-extrabold md:text-price md:leading-7">
        {formatPrice(price)}
      </span>
    </div>
  )
}
