import ProductCard from '@/components/product/ProductCard'
import { getDishById } from '@/data/dishes'
import { cn } from '@/utils/cn'

// Секция «С этим блюдом часто заказывают:» (Figma: Desktop_Карточка продукта)
export default function ProductRecommendations({ recommendedDishIds = [], className }) {
  const dishes = recommendedDishIds
    .map(getDishById)
    .filter(Boolean)

  if (dishes.length === 0) return null

  return (
    <section className={cn('mt-16 md:mt-24 lg:mt-32', className)}>
      <h2 className="text-title md:text-[40px] md:leading-[45px]">
        С этим блюдом
        <br />
        часто заказывают:
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 md:gap-x-5 md:gap-y-[41px] lg:grid-cols-3 xl:max-w-[960px]">
        {dishes.map((dish) => (
          <ProductCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  )
}
