import { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { useCart } from '@/hooks/useCart'

import CheckoutButton from '../components/CheckoutButton'
import RadioOption from '../components/RadioOption'

const PAYMENT_METHODS = [
  { id: 'card', title: 'Банковские карты / Электронные деньги / Другое' },
  { id: 'cash-courier', title: 'Наличными курьеру' },
  { id: 'card-courier', title: 'Картой курьеру' },
]

// Figma: Desktop_Оф.Заказа_Оплата
export default function PaymentStep() {
  const { order, updateOrder } = useOutletContext()
  const { clear } = useCart()
  const navigate = useNavigate()
  const [method, setMethod] = useState(order.payment.method)
  const [isPlaced, setIsPlaced] = useState(false)

  useEffect(() => {
    if (!order.contacts.phone) navigate(ROUTES.CHECKOUT_CONTACTS, { replace: true })
  }, [order.contacts.phone, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    updateOrder('payment', { method })
    clear()
    setIsPlaced(true)
  }

  if (isPlaced) {
    return (
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-subheading">Спасибо за заказ!</h2>
        <p className="text-caption text-muted">
          Мы свяжемся с вами в ближайшее время, чтобы подтвердить детали.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-8">
      <div className="flex w-full flex-col gap-5">
        {PAYMENT_METHODS.map((option) => (
          <RadioOption
            key={option.id}
            name="payment-method"
            value={option.id}
            checked={method === option.id}
            onChange={() => setMethod(option.id)}
          >
            <span className="text-body">{option.title}</span>
          </RadioOption>
        ))}
      </div>

      <CheckoutButton>Подтвердить заказ</CheckoutButton>
    </form>
  )
}
