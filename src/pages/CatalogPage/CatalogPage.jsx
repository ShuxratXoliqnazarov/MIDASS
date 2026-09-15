import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductCard from '@/components/product/ProductCard'
import ProductGrid from '@/components/product/ProductGrid'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Container from '@/components/ui/Container'
import OutlineButton from '@/components/ui/OutlineButton'
import { getCategoryBySlug } from '@/constants/categories'
import { ROUTES } from '@/constants/routes'
import { getDishesByCategory } from '@/data/dishes'
import NotFoundPage from '@/pages/NotFoundPage'

import SortSelect from './components/SortSelect'
import { SORT_OPTIONS, sortDishes } from './sortOptions'

// URL: /catalog/:categorySlug  (например /catalog/hot-dishes)
// Figma: Desktop_Каталог, Tablet_Каталог (1024 / 768), Каталог (Phone)
export default function CatalogPage() {
  const { categorySlug } = useParams()
  const [sortId, setSortId] = useState(SORT_OPTIONS[0].id)
  const category = getCategoryBySlug(categorySlug)

  if (!category) return <NotFoundPage />

  const dishes = sortDishes(getDishesByCategory(category.slug), sortId)

  return (
    <Container className="pt-[34px] pb-[60px] md:pt-[15px] md:pb-[136px] lg:pt-2 lg:pb-[147px] xl:pb-[190px]">
      <h1 className="text-title md:text-display">{category.title}</h1>

      <Breadcrumbs
        className="mt-[11px] md:mt-[10px]"
        items={[{ title: 'Главная', to: ROUTES.HOME }, { title: category.title }]}
      />

      {dishes.length > 0 ? (
        <>
          <div className="mt-[39px] flex md:mt-[22px] md:justify-end xl:mt-[17px]">
            <SortSelect value={sortId} onChange={setSortId} />
          </div>

          <ProductGrid className="mt-[23px] md:mt-[25px] lg:mt-6 xl:mt-[29px]">
            {dishes.map((dish) => (
              <ProductCard key={dish.id} dish={dish} />
            ))}
          </ProductGrid>
        </>
      ) : (
        <div className="mt-16 flex flex-col items-start gap-6 md:mt-24">
          <p className="text-body">В этой категории пока нет блюд — загляните чуть позже</p>
          <OutlineButton to={ROUTES.HOME} className="px-8">
            На главную
          </OutlineButton>
        </div>
      )}
    </Container>
  )
}
