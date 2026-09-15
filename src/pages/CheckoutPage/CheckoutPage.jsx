import { Outlet } from 'react-router-dom'

import PagePlaceholder from '@/components/common/PagePlaceholder'

// Общая обёртка оформления заказа (заголовок, хлебные крошки, сводка заказа).
// Текущий шаг рендерится на месте <Outlet />:
//   /checkout/contacts → ContactsStep
//   /checkout/delivery → DeliveryStep
//   /checkout/payment  → PaymentStep
export default function CheckoutPage() {
  return (
    <PagePlaceholder title="Оформление заказа" figmaFrame="Desktop_Оф.Заказа">
      <Outlet />
    </PagePlaceholder>
  )
}
