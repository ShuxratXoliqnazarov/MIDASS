import { Link } from 'react-router-dom'

import ProductPrice from '@/components/product/ProductPrice'
import WeightBadge from '@/components/product/WeightBadge'
import BasketButton from '@/components/ui/BasketButton'
import OutlineButton from '@/components/ui/OutlineButton'
import { getProductPath } from '@/constants/routes'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/utils/cn'

// Карточка блюда: главная («Популярные блюда»), каталог, «С этим блюдом часто заказывают».
// image — можно передать другое фото (на главной одно блюдо встречается с разными фото).
export default function ProductCard({ dish, image = dish.image, className }) {
  const { addItem } = useCart()
  const productPath = getProductPath(dish.id)

  return (
    <article className={cn('flex flex-col', className)}>
      <Link to={productPath} className="group block aspect-square overflow-hidden bg-dark-soft">
        <img
          src={image}
          alt={dish.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <h3 className="mt-[10px] line-clamp-2 text-[14px] leading-[17px] md:mt-4 md:text-body md:leading-6">
        <Link to={productPath} className="transition-colors hover:text-primary">
          {dish.name}
        </Link>
      </h3>

      <WeightBadge weight={dish.weight} className="mt-[10px] self-start" />

      {dish.description && (
        <p className="mt-[6px] line-clamp-3 text-caption opacity-80 max-md:hidden">
          {dish.description}
        </p>
      )}

      <div className="mt-auto grid grid-cols-[80px_auto] items-center pt-3 md:grid-cols-[105px_auto] md:pt-[9px]">
        <ProductPrice price={dish.price} oldPrice={dish.oldPrice} priceFrom={dish.priceFrom} />

        {dish.variants ? (
          <OutlineButton to={productPath} className="w-[75px] px-0 md:w-[128px]">
            {dish.variants} вида
          </OutlineButton>
        ) : (
          <BasketButton onClick={() => addItem(dish.id)} />
        )}
      </div>
    </article>
  )
}
