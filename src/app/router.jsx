import { createBrowserRouter, Navigate } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'
import { ROUTES } from '@/constants/routes'

import HomePage from '@/pages/HomePage'
import CatalogPage from '@/pages/CatalogPage'
import ProductPage from '@/pages/ProductPage'
import CartPage from '@/pages/CartPage'
import CheckoutPage, { ContactsStep, DeliveryStep, PaymentStep } from '@/pages/CheckoutPage'
import FeedbackPage from '@/pages/FeedbackPage'
import NotFoundPage from '@/pages/NotFoundPage'

/*
 * Все маршруты приложения в одном месте.
 * Пути НЕ пишем строками — берём из '@/constants/routes'.
 *
 *  /                          → Главная
 *  /catalog/:categorySlug     → Каталог (Горячие блюда, Супы, ...)
 *  /product/:productId        → Карточка продукта
 *  /cart                      → Корзина
 *  /checkout                  → Оформление заказа (редирект на шаг 1)
 *    /checkout/contacts       → 01. Контактные данные
 *    /checkout/delivery       → 02. Способ доставки
 *    /checkout/payment        → 03. Оплата
 *  /feedback                  → Обратная связь
 *  *                          → 404
 */
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.CATALOG, element: <CatalogPage /> },
      { path: ROUTES.PRODUCT, element: <ProductPage /> },
      { path: ROUTES.CART, element: <CartPage /> },
      {
        path: ROUTES.CHECKOUT,
        element: <CheckoutPage />,
        children: [
          { index: true, element: <Navigate to={ROUTES.CHECKOUT_CONTACTS} replace /> },
          { path: ROUTES.CHECKOUT_CONTACTS, element: <ContactsStep /> },
          { path: ROUTES.CHECKOUT_DELIVERY, element: <DeliveryStep /> },
          { path: ROUTES.CHECKOUT_PAYMENT, element: <PaymentStep /> },
        ],
      },
      { path: ROUTES.FEEDBACK, element: <FeedbackPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
