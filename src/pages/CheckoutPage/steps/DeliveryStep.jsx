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
          <span className="text-body">Бесконтактная доставка {formatPrice(DELIVERY_PRICE)}</span>
          <p className="mt-2 text-caption text-muted">
            Доставка по Москве и области, время передаётся при подтверждении заказа. Доставка от 30
            минут
          </p>
        </RadioOption>

        <RadioOption
          name="delivery-method"
          value="pickup"
          variant="card"
          checked={!isCourier}
          onChange={() => setDelivery((prev) => ({ ...prev, method: 'pickup' }))}
        >
          <span className="text-body">Самовывоз +0 ₽</span>
          <p className="mt-2 text-caption text-muted">
            Самовывоз с 10:00 до 22:00 по адресу ул. Тверская, 5
          </p>
        </RadioOption>
      </div>

      {isCourier && (
        <div className="flex w-full flex-col gap-5">
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
