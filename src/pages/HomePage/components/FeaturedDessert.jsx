import { Link } from 'react-router-dom'

import ProductPrice from '@/components/product/ProductPrice'
import WeightBadge from '@/components/product/WeightBadge'
import BasketButton from '@/components/ui/BasketButton'
import { getProductPath } from '@/constants/routes'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/utils/cn'

// «Тирамису» слева на первом экране (desktop и 1024)
export default function FeaturedDessert({ dish, className }) {
  const { addItem } = useCart()
  const productPath = getProductPath(dish.id)

  return (
    <article className={cn('w-[264px]', className)}>
      <Link to={productPath} className="block">
        <img src={dish.image} alt={dish.name} className="h-[262px] w-[264px] object-contain" />
      </Link>

      <div className="pl-[26px]">
        <h3 className="-mt-1 text-body">
          <Link to={productPath} className="transition-colors hover:text-primary">
            {dish.name}
          </Link>
        </h3>

        <WeightBadge weight={dish.weight} className="mt-[5px]" />

        <div className="mt-4 grid grid-cols-[105px_auto] items-center">
          <ProductPrice price={dish.price} />
          <BasketButton onClick={() => addItem(dish.id)} />
        </div>
      </div>
    </article>
  )
}
