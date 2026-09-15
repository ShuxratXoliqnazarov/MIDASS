import { Link } from 'react-router-dom'

import brushImage from '@/assets/images/brush-red.webp'
import { BasketIcon } from '@/components/icons'
import WeightBadge from '@/components/product/WeightBadge'
import { getProductPath } from '@/constants/routes'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/formatPrice'

// Красная «мазня» с блюдом на первом экране.
// При наведении кнопка корзины раскрывается в «Заказать» (Figma: Desktop_Каталог 1072:0).
export default function PromoDish({ dish, className }) {
  const { addItem } = useCart()

  return (
    <article className={cn('group h-[358px] w-[355px]', className)}>
      <img src={brushImage} alt="" className="absolute inset-0 size-full" />

      <div className="relative px-[56px] pt-[37px]">
        <h3 className="max-w-[250px] text-subheading text-balance">
          <Link to={getProductPath(dish.id)} className="transition-colors hover:text-primary">
            {dish.name}
          </Link>
        </h3>

        <WeightBadge weight={dish.weight} className="mt-[5px]" />

        <p className="mt-[7px] max-w-[231px] text-[15px] leading-[21px] opacity-80">
          {dish.description}
        </p>
      </div>

      <div className="absolute top-[253px] left-[56px] grid grid-cols-[105px_auto] items-center">
        <span className="text-price font-extrabold whitespace-nowrap">
          {formatPrice(dish.price)}
        </span>

        <button
          type="button"
          onClick={() => addItem(dish.id)}
          className="flex h-[42px] w-[42px] items-center justify-center bg-primary text-black shadow-button transition-all duration-300 group-hover:w-[128px] hover:bg-primary-hover active:bg-black active:text-primary"
        >
          <BasketIcon className="h-6 w-[26px] shrink-0 group-hover:hidden" />
          <span className="hidden text-caption font-bold tracking-[0.1em] uppercase group-hover:inline">
            Заказать
          </span>
        </button>
      </div>
    </article>
  )
}
