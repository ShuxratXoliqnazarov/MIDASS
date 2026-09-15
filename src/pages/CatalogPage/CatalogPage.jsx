import { useParams } from 'react-router-dom'

import PagePlaceholder from '@/components/common/PagePlaceholder'
import { getCategoryBySlug } from '@/constants/categories'
import NotFoundPage from '@/pages/NotFoundPage'

// URL: /catalog/:categorySlug  (например /catalog/hot-dishes)
export default function CatalogPage() {
  const { categorySlug } = useParams()
  const category = getCategoryBySlug(categorySlug)

  if (!category) return <NotFoundPage />

  return <PagePlaceholder title={category.title} figmaFrame="Desktop_Каталог" />
}
