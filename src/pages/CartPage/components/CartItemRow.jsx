import { Link } from 'react-router-dom'

import { CloseIcon } from '@/components/icons'
import WeightBadge from '@/components/product/WeightBadge'
import { getProductPath } from '@/constants/routes'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/formatPrice'

// Строка товара в корзине (Figma: Desktop_Корзина)
export default function CartItemRow({ item, dish, className }) {
  const { setQuantity, removeItem } = useCart()

  const productPath = getProductPath(dish.baseId || dish.id)
  const lineTotal = dish.price * item.quantity

  const handleDecrease = () => {
    if (item.quantity > 1) {
      setQuantity(item.id, item.quantity - 1)
    } else {
      removeItem(item.id)
    }
  }

  const handleIncrease = () => {
    setQuantity(item.id, item.quantity + 1)
  }

  return (
    <article
      className={cn(
        'bg-black p-4 md:px-6 md:py-5',
        className,
      )}
    >
      {/* Desktop Layout (>= 1024px) */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_120px_140px_140px_42px] lg:items-center lg:gap-4">
        {/* Колонка: Блюдо */}
        <div className="flex items-center gap-5 min-w-0">
          <Link
            to={productPath}
            className="group block size-[90px] shrink-0 overflow-hidden bg-dark-soft xl:size-[104px]"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="flex flex-col items-start min-w-0 pr-4">
            <h3 className="line-clamp-2 text-body">
              <Link to={productPath} className="transition-colors hover:text-primary">
                {dish.name}
              </Link>
            </h3>

            {dish.varietyName && (
              <p className="mt-1 text-caption text-muted">{dish.varietyName}</p>
            )}

            <WeightBadge weight={dish.weight} className="mt-2" />
          </div>
        </div>

        {/* Колонка: Цена */}
        <div className="text-center text-price font-extrabold text-white">
          {formatPrice(dish.price)}
        </div>

        {/* Колонка: Кол-во */}
        <div className="flex justify-center">
          <div
            aria-label="Выбор количества"
            className="flex h-[38px] w-[104px] items-center justify-between border border-line-dark px-2 text-caption"
          >
            <button
              type="button"
              aria-label="Уменьшить количество"
              onClick={handleDecrease}
              className="flex size-6 items-center justify-center text-muted transition-colors hover:text-white"
            >
              —
            </button>
            <span className="font-semibold text-white">{item.quantity} шт</span>
            <button
              type="button"
              aria-label="Увеличить количество"
              onClick={handleIncrease}
              className="flex size-6 items-center justify-center text-muted transition-colors hover:text-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Колонка: Сумма */}
        <div className="text-center text-price font-extrabold text-white">
          {formatPrice(lineTotal)}
        </div>

        {/* Колонка: Удалить */}
        <div className="flex justify-end">
          <button
            type="button"
            aria-label={`Удалить ${dish.name} из корзины`}
            onClick={() => removeItem(item.id)}
            className="flex size-[38px] items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-white xl:size-[42px]"
          >
            <CloseIcon className="size-4" />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Layout (< 1024px) */}
      <div className="flex flex-col gap-4 lg:hidden">
        <div className="flex items-start gap-4">
          <Link
            to={productPath}
            className="block size-[76px] shrink-0 overflow-hidden bg-dark-soft sm:size-[90px]"
          >
            <img src={dish.image} alt={dish.name} className="size-full object-cover" />
          </Link>

          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-[15px] leading-[19px] sm:text-body">
              <Link to={productPath} className="transition-colors hover:text-primary">
                {dish.name}
              </Link>
            </h3>

            {dish.varietyName && (
              <p className="mt-1 text-caption text-muted">{dish.varietyName}</p>
            )}

            <WeightBadge weight={dish.weight} className="mt-2" />
          </div>

          <button
            type="button"
            aria-label={`Удалить ${dish.name} из корзины`}
            onClick={() => removeItem(item.id)}
            className="flex size-[36px] shrink-0 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-white"
          >
            <CloseIcon className="size-3.5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between border-t border-line-dark/40 pt-3 gap-3">
          <div className="flex items-center gap-3">
            <span className="text-tiny uppercase text-muted">Цена:</span>
            <span className="text-body font-bold text-white">{formatPrice(dish.price)}</span>
          </div>

          <div
            aria-label="Выбор количества"
            className="flex h-[36px] w-[96px] items-center justify-between border border-line-dark px-2 text-tiny"
          >
            <button
              type="button"
              aria-label="Уменьшить количество"
              onClick={handleDecrease}
              className="flex size-6 items-center justify-center text-muted transition-colors hover:text-white"
            >
              —
            </button>
            <span className="font-semibold text-white">{item.quantity} шт</span>
            <button
              type="button"
              aria-label="Увеличить количество"
              onClick={handleIncrease}
              className="flex size-6 items-center justify-center text-muted transition-colors hover:text-white"
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-tiny uppercase text-muted">Сумма:</span>
            <span className="text-price font-extrabold text-white">{formatPrice(lineTotal)}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
