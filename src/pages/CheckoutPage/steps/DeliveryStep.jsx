import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { formatPrice } from '@/utils/formatPrice'

import CheckoutButton from '../components/CheckoutButton'
import FormField from '../components/FormField'
import RadioOption from '../components/RadioOption'

const DELIVERY_PRICE = 300

// Figma: Desktop_Оф.Заказа_Доставка_1, Desktop_Оф.Заказа_Доставка_2
export default function DeliveryStep() {
  const { order, updateOrder } = useOutletContext()
  const [delivery, setDelivery] = useState(order.delivery)
  const navigate = useNavigate()

  useEffect(() => {
    if (!order.contacts.phone) navigate(ROUTES.CHECKOUT_CONTACTS, { replace: true })
  }, [order.contacts.phone, navigate])

  const isCourier = delivery.method === 'courier'

  const handleField = (field) => (event) =>
    setDelivery((prev) => ({ ...prev, [field]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    updateOrder('delivery', delivery)
    navigate(ROUTES.CHECKOUT_PAYMENT)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-8">
      <div className="flex w-full flex-col gap-5 md:flex-row">
        <RadioOption
          name="delivery-method"
          value="courier"
          variant="card"
          checked={isCourier}
          onChange={() => setDelivery((prev) => ({ ...prev, method: 'courier' }))}
        >
          <div className="flex w-full items-baseline justify-between gap-2">
            <span className="text-body">Бесконтактная доставка</span>
            <span className="text-body font-bold">{formatPrice(DELIVERY_PRICE)}</span>
          </div>
          <p className="mt-2 text-caption text-muted">
            Доставка по Москве в пределах МКАД
            <br />
            Осуществляется ежедневно с 12:00 до 00:00,
            <br />
            Диапазон времени: от 1 до 1.5 часов
          </p>
        </RadioOption>

        <RadioOption
          name="delivery-method"
          value="pickup"
          variant="card"
          checked={!isCourier}
          onChange={() => setDelivery((prev) => ({ ...prev, method: 'pickup' }))}
        >
          <div className="flex w-full items-baseline justify-between gap-2">
            <span className="text-body">Самовывоз</span>
            <span className="text-body font-bold">+0 ₽</span>
          </div>
          <p className="mt-2 text-caption text-muted">
            Доступен с 12:00 до 00:00
            <br />
            По адресу: <span className="underline">ул. Улофа Пальме 5с2</span>
          </p>
        </RadioOption>
      </div>

      {isCourier && (
        <div className="flex w-full flex-col gap-5">
          <p className="text-tiny tracking-[0.05em] text-muted uppercase">Адрес доставки</p>

          <FormField
            label="Улица"
            required
            value={delivery.street}
            onChange={handleField('street')}
          />

          <div className="flex flex-wrap gap-5">
            <FormField
              label="Дом"
              required
              value={delivery.house}
              onChange={handleField('house')}
            />
            <FormField
              label="Квартира"
              value={delivery.apartment}
              onChange={handleField('apartment')}
            />
          </div>

          <FormField
            label="Комментарий к заказу"
            value={delivery.comment}
            onChange={handleField('comment')}
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-5">
        <CheckoutButton>Продолжить</CheckoutButton>
        <span className="text-caption text-muted">Осталось еще 1 шаг</span>
      </div>
    </form>
  )
}
