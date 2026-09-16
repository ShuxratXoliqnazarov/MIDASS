import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Container from '@/components/ui/Container'
import { ROUTES } from '@/constants/routes'

import OrderSummary from './components/OrderSummary'
import StepsNav from './components/StepsNav'

const INITIAL_ORDER = {
  contacts: { name: '', phone: '', email: '', persons: '' },
  delivery: { method: 'courier', street: '', house: '', apartment: '', comment: '' },
  payment: { method: 'card' },
}

// Общая обёртка оформления заказа (заголовок, хлебные крошки, шаги, сводка заказа).
// Данные заказа живут здесь и передаются в шаги через контекст <Outlet />:
//   /checkout/contacts → ContactsStep
//   /checkout/delivery → DeliveryStep
//   /checkout/payment  → PaymentStep
export default function CheckoutPage() {
  const [order, setOrder] = useState(INITIAL_ORDER)

  const updateOrder = (step, values) =>
    setOrder((prev) => ({ ...prev, [step]: { ...prev[step], ...values } }))

  return (
    <Container className="pt-[34px] pb-[60px] md:pt-[15px] md:pb-[136px] lg:pt-2 lg:pb-[147px] xl:pb-[190px]">
      <h1 className="text-title md:text-display">Оформление заказа</h1>

      <Breadcrumbs
        className="mt-[11px] md:mt-[10px]"
        items={[
          { title: 'Главная', to: ROUTES.HOME },
          { title: 'Корзина', to: ROUTES.CART },
          { title: 'Оформление заказа' },
        ]}
      />

      <StepsNav className="mt-10 md:mt-[50px]" />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_573px] lg:items-start xl:grid-cols-[1fr_613px]">
        <Outlet context={{ order, updateOrder }} />
        <OrderSummary />
      </div>
    </Container>
  )
}
