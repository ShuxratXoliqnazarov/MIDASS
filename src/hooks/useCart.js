import { useContext } from 'react'

import { CartContext } from '@/context/cartContext'

// const { items, count, addItem, setQuantity, removeItem, clear } = useCart()
export function useCart() {
  const cart = useContext(CartContext)

  if (!cart) throw new Error('useCart нужно вызывать внутри <CartProvider>')

  return cart
}
