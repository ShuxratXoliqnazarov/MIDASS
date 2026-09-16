import { useEffect, useMemo, useState } from 'react'

import { CartContext } from './cartContext'

const STORAGE_KEY = 'midas-cart'

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

// Корзина: список { id, quantity }. Сохраняется в localStorage.
// Базовая версия для кнопок «в корзину» и счётчика в Header —
// страница корзины может расширять её как нужно.
export default function CartProvider({ children }) {
  const [items, setItems] = useState(readCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // localStorage недоступен (приватный режим) — корзина живёт до перезагрузки
    }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),

      addItem: (id, quantity = 1) =>
        setItems((prev) =>
          prev.some((item) => item.id === id)
            ? prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
              )
            : [...prev, { id, quantity }],
        ),

      setQuantity: (id, quantity) =>
        setItems((prev) =>
          quantity > 0
            ? prev.map((item) => (item.id === id ? { ...item, quantity } : item))
            : prev.filter((item) => item.id !== id),
        ),

      removeItem: (id) => setItems((prev) => prev.filter((item) => item.id !== id)),

      clear: () => setItems([]),
    }),
    [items],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
