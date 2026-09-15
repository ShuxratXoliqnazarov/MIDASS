import { useParams } from 'react-router-dom'

import PagePlaceholder from '@/components/common/PagePlaceholder'

// URL: /product/:productId  (например /product/khinkali-fried)
export default function ProductPage() {
  const { productId } = useParams()

  return (
    <PagePlaceholder title="Карточка продукта" figmaFrame="Desktop_Карточка продукта">
      <p className="mt-2 text-caption text-muted">productId: {productId}</p>
    </PagePlaceholder>
  )
}
