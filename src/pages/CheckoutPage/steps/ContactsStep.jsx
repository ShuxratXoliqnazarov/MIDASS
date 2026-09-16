import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'

import CheckoutButton from '../components/CheckoutButton'
import FormField from '../components/FormField'

// Figma: Desktop_Оф.Заказа_Контакты
export default function ContactsStep() {
  const { order, updateOrder } = useOutletContext()
  const [contacts, setContacts] = useState(order.contacts)
  const navigate = useNavigate()

  const handleField = (field) => (event) =>
    setContacts((prev) => ({ ...prev, [field]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    updateOrder('contacts', contacts)
    navigate(ROUTES.CHECKOUT_DELIVERY)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-8">
      <div>
        <p className="text-caption underline">Уже покупали у нас?</p>
        <p className="mt-1 text-caption text-muted">
          Войдите в личный кабинет, и все ваши данные автоматически заполнятся
        </p>
      </div>

      <div className="flex w-full flex-col gap-5">
        <FormField label="Имя" required value={contacts.name} onChange={handleField('name')} />
        <FormField
          label="Телефон"
          type="tel"
          required
          value={contacts.phone}
          onChange={handleField('phone')}
        />
        <FormField
          label="Email"
          type="email"
          value={contacts.email}
          onChange={handleField('email')}
        />
        <FormField
          label="Кол-во персон"
          type="number"
          min="1"
          inputClassName="max-w-[100px]"
          value={contacts.persons}
          onChange={handleField('persons')}
        />
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <CheckoutButton>Продолжить</CheckoutButton>
        <span className="text-caption text-muted">Осталось еще 2 шага</span>
      </div>
    </form>
  )
}
