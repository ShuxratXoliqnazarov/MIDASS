import { Link } from 'react-router-dom'

import ProductPrice from '@/components/product/ProductPrice'
import { ROUTES } from '@/constants/routes'
import { getDishById } from '@/data/dishes'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/formatPrice'

// Карточка «Итого» справа от формы — список блюд из корзины и сумма к оплате.
// Figma: Desktop_Оф.Заказа (613×680), одна и та же карточка на всех трёх шагах.
export default function OrderSummary({ className }) {
  const { items } = useCart()

  const lines = items
    .map((item) => ({ item, dish: getDishById(item.id) }))
    .filter(({ dish }) => dish)

  if (lines.length === 0) {
    return (
      <div className={cn('flex flex-col items-start gap-4 bg-dark-soft p-5', className)}>
        <p className="text-body">Корзина пуста</p>
        <Link
          to={ROUTES.HOME}
          className="text-caption text-primary underline hover:text-primary-hover"
        >
          Перейти в меню
        </Link>
      </div>
    )
  }

  const total = lines.reduce((sum, { item, dish }) => sum + dish.price * item.quantity, 0)

  return (
    <div className={cn('flex flex-col bg-dark-soft', className)}>
      <ul>
        {lines.map(({ item, dish }) => (
          <li key={dish.id} className="flex items-center gap-4 border-b border-line-dark p-5">
            <img
              src={dish.image}
              alt={dish.name}
              className="size-[70px] shrink-0 rounded-full bg-line object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-body">{dish.name}</p>
              <p className="mt-1 text-caption text-muted">{dish.weight} г</p>
            </div>

            <span className="shrink-0 text-caption text-muted">{item.quantity} шт</span>
            <ProductPrice price={dish.price * item.quantity} className="shrink-0" />
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between p-5">
        <span className="text-caption tracking-[0.05em] text-muted uppercase">Итого к оплате:</span>
        <span className="text-price font-extrabold">{formatPrice(total)}</span>
      </div>
    </div>
  )
}
