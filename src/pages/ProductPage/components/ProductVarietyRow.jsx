import { useState } from 'react'

import WeightBadge from '@/components/product/WeightBadge'
import BasketButton from '@/components/ui/BasketButton'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/formatPrice'

// Строка разновидности блюда (Figma: Desktop_Карточка продукта).
// Содержит название, вес, счётчик количества (— 1 шт +), цену и кнопку добавления в корзину.
export default function ProductVarietyRow({ variety, dishId, className }) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const itemId = variety.id ? `${dishId}--${variety.id}` : dishId

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCart = () => {
    addItem(itemId, quantity)
  }

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between gap-3 bg-black p-4 sm:flex-nowrap sm:px-6 sm:py-[18px]',
        className,
      )}
    >
      <div className="flex flex-col items-start">
        <span className="text-[15px] font-medium leading-[19px] text-white sm:text-body sm:leading-6">
          {variety.name}
        </span>
        <WeightBadge weight={variety.weight} className="mt-1" />
      </div>

      <div className="ml-auto flex items-center gap-4 sm:gap-6">
        {/* Счётчик: [ — 1 шт + ] */}
        <div
          aria-label="Выбор количества"
          className="flex h-[38px] w-[96px] items-center justify-between border border-line-dark px-2 text-tiny sm:w-[104px] sm:text-caption"
        >
          <button
            type="button"
            aria-label="Уменьшить количество"
            onClick={handleDecrease}
            className="flex size-6 items-center justify-center text-muted transition-colors hover:text-white"
          >
            —
          </button>
          <span className="font-semibold text-white">{quantity} шт</span>
          <button
            type="button"
            aria-label="Увеличить количество"
            onClick={handleIncrease}
            className="flex size-6 items-center justify-center text-muted transition-colors hover:text-white"
          >
            +
          </button>
        </div>

        {/* Цена (пересчитывается в зависимости от количества) */}
        <span className="min-w-[68px] text-right text-[17px] font-extrabold text-white whitespace-nowrap sm:min-w-[90px] sm:text-price">
          {formatPrice(variety.price * quantity)}
        </span>

        {/* Кнопка в корзину */}
        <BasketButton
          onClick={handleAddToCart}
          label={`Добавить в корзину: ${variety.name}`}
          className="size-[39px] shrink-0 sm:size-[42px]"
        />
      </div>
    </div>
  )
}
