import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { cn } from '@/utils/cn'
import { formatPrice } from '@/utils/formatPrice'

// Блок промокода, итоговой суммы и кнопки оформления заказа (Figma: Desktop_Корзина)
export default function CartSummary({ totalAmount, className }) {
  const [promoCode, setPromoCode] = useState('')
  const [promoStatus, setPromoStatus] = useState(null)

  const handleApplyPromo = (event) => {
    event.preventDefault()
    if (!promoCode.trim()) return

    // Имитация применения промокода
    setPromoStatus('Промокод принят')
  }

  return (
    <div className={cn('flex flex-col items-end gap-6', className)}>
      {/* Промокод */}
      <div className="flex flex-col items-end gap-2">
        <span className="text-tiny tracking-[0.05em] text-muted uppercase">
          Применить промокод:
        </span>

        <form onSubmit={handleApplyPromo} className="flex items-center gap-2.5">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Введите промокод"
            className="h-[42px] w-[180px] bg-white px-3 text-caption text-black placeholder:text-placeholder outline-none sm:w-[220px]"
          />

          <button
            type="submit"
            className="flex h-[42px] items-center justify-center border border-primary px-5 text-tiny font-bold tracking-[0.1em] text-primary uppercase transition-colors hover:bg-primary hover:text-black"
          >
            Применить
          </button>
        </form>

        {promoStatus && (
          <span className="text-tiny text-[#22C55E]">{promoStatus}</span>
        )}
      </div>

      {/* Итого к оплате */}
      <div className="flex items-baseline gap-3">
        <span className="text-tiny tracking-[0.05em] text-muted uppercase sm:text-caption">
          Итого к оплате:
        </span>
        <span className="text-[24px] font-extrabold text-white sm:text-[28px]">
          {formatPrice(totalAmount)}
        </span>
      </div>

      {/* Кнопка оформления заказа */}
      <Link
        to={ROUTES.CHECKOUT_CONTACTS}
        className="inline-flex h-[48px] items-center justify-center bg-primary px-9 text-caption font-bold tracking-[0.1em] text-black uppercase shadow-button transition-colors hover:bg-primary-hover active:bg-black active:text-primary sm:h-[52px] sm:px-11"
      >
        Оформить заказ
      </Link>
    </div>
  )
}
