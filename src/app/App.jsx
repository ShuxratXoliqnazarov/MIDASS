import { RouterProvider } from 'react-router-dom'

import { router } from './router'

// Корень приложения. Сюда же позже добавляются глобальные провайдеры
// (например, CartProvider для корзины).
export default function App() {
  return <RouterProvider router={router} />
}
