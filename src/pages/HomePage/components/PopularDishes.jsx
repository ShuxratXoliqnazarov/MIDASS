import { useState } from 'react'

import ProductCard from '@/components/product/ProductCard'
import ProductGrid from '@/components/product/ProductGrid'
import Container from '@/components/ui/Container'
import OutlineButton from '@/components/ui/OutlineButton'
import { POPULAR_DISHES } from '@/data/dishes'
import { cn } from '@/utils/cn'

// Сколько карточек видно сразу: phone — 8 (+ «Показать еще»), 768 — 9, 1024+ — 12
const PHONE_LIMIT = 8
const TABLET_LIMIT = 9

export default function PopularDishes() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="pb-[104px] md:pb-[173px] lg:pb-[163px] xl:pb-[148px]">
      <Container>
        <h2 className="max-w-[643px] text-title md:text-display lg:ml-[calc((100%+20px)/4)] lg:max-w-[546px] xl:ml-[calc((100%+20px)/3)] xl:max-w-[643px]">
          Популярные блюда
        </h2>

        <ProductGrid className="mt-[29px] md:mt-[51px]">
          {POPULAR_DISHES.map(({ dish, image }, index) => (
            <ProductCard
              key={`${dish.id}-${index}`}
              dish={dish}
              image={image}
              className={cn(
                index >= PHONE_LIMIT && !isExpanded && 'max-md:hidden',
                index >= TABLET_LIMIT && 'md:max-lg:hidden',
              )}
            />
          ))}
        </ProductGrid>

        {!isExpanded && (
          <div className="mt-5 flex justify-center md:hidden">
            <OutlineButton onClick={() => setIsExpanded(true)} className="w-[214px]">
              Показать еще
            </OutlineButton>
          </div>
        )}
      </Container>
    </section>
  )
}
