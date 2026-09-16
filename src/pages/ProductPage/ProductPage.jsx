import { useParams } from 'react-router-dom'

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Container from '@/components/ui/Container'
import DotsPattern from '@/components/ui/DotsPattern'
import { getCategoryBySlug } from '@/constants/categories'
import { getCatalogPath, ROUTES } from '@/constants/routes'
import { getDishById } from '@/data/dishes'
import NotFoundPage from '@/pages/NotFoundPage'

import ProductRecommendations from './components/ProductRecommendations'
import ProductVarietyRow from './components/ProductVarietyRow'

const DEFAULT_RECOMMENDED_IDS = ['khachapuri-adjarian', 'lunch-low-calorie', 'khachapuri-megrelian']

// URL: /product/:productId (например /product/khinkali-fried)
// Figma: Desktop_Карточка продукта
export default function ProductPage() {
  const { productId } = useParams()
  const dish = getDishById(productId)

  if (!dish) return <NotFoundPage />

  const category = getCategoryBySlug(dish.category)
  const breadcrumbItems = [
    { title: 'Главная', to: ROUTES.HOME },
    ...(category ? [{ title: category.title, to: getCatalogPath(category.slug) }] : []),
    { title: dish.name },
  ]

  const recommendedIds =
    dish.recommendedDishIds?.length > 0 ? dish.recommendedDishIds : DEFAULT_RECOMMENDED_IDS

  return (
    <Container className="pt-[34px] pb-[80px] md:pt-[15px] md:pb-[140px] lg:pt-2 lg:pb-[180px]">
      <h1 className="text-title md:text-display">{dish.name}</h1>

      <Breadcrumbs items={breadcrumbItems} className="mt-[11px] md:mt-[10px]" />

      <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,540px)_1fr] lg:gap-12 xl:grid-cols-[570px_1fr] xl:gap-16">
        {/* Левая колонка: фото блюда с декоративной сеткой точек */}
        <div className="relative self-start">
          <DotsPattern className="absolute -top-5 -left-5 size-[130px] md:-top-7 md:-left-7 md:size-[170px]" />

          <div className="relative z-10 aspect-[4/3] w-full overflow-hidden bg-dark-soft">
            <img
              src={dish.image}
              alt={dish.name}
              className="size-full object-cover"
            />
          </div>
        </div>

        {/* Правая колонка: разновидности и описание */}
        <div className="flex flex-col">
          <p className="text-tiny tracking-[0.1em] text-muted uppercase">Разновидности:</p>

          <div className="mt-3.5 flex flex-col gap-3">
            {dish.varieties && dish.varieties.length > 0 ? (
              dish.varieties.map((variety) => (
                <ProductVarietyRow key={variety.id} variety={variety} dishId={dish.id} />
              ))
            ) : (
              <ProductVarietyRow
                variety={{
                  id: '',
                  name: dish.name,
                  weight: dish.weight,
                  price: dish.price,
                }}
                dishId={dish.id}
              />
            )}
          </div>

          {dish.description && (
            <div className="mt-8 md:mt-10">
              <p className="text-tiny tracking-[0.1em] text-muted uppercase">Описание:</p>
              <p className="mt-3.5 max-w-[500px] text-[14px] leading-[22px] opacity-80 md:text-[15px] md:leading-6">
                {dish.description}
              </p>
            </div>
          )}
        </div>
      </div>

      <ProductRecommendations recommendedDishIds={recommendedIds} />
    </Container>
  )
}
