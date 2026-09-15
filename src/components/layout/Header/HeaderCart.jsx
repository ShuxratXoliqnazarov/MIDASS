import { Link } from 'react-router-dom'

import { CartIcon } from '@/components/icons'
import { ROUTES } from '@/constants/routes'
import { useCart } from '@/hooks/useCart'

// Иконка корзины с жёлтым счётчиком товаров
export default function HeaderCart() {
  const { count } = useCart()

  return (
    <Link
      to={ROUTES.CART}
      aria-label={`Корзина, товаров: ${count}`}
      className="relative block transition-colors hover:text-primary"
    >
      <CartIcon className="h-[25px] w-[27px]" />

      {count > 0 && (
        <span className="absolute -top-[6px] -left-[10px] flex h-[19px] min-w-[23px] items-center justify-center rounded-[4px] border-2 border-dark bg-primary px-[3px] text-tiny leading-none text-black">
          {count}
        </span>
      )}
    </Link>
  )
}
