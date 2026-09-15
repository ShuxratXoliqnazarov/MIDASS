// Шаблоны путей — используются в router.jsx
export const ROUTES = {
  HOME: '/',
  CATALOG: '/catalog/:categorySlug',
  PRODUCT: '/product/:productId',
  CART: '/cart',
  CHECKOUT: '/checkout',
  CHECKOUT_CONTACTS: '/checkout/contacts',
  CHECKOUT_DELIVERY: '/checkout/delivery',
  CHECKOUT_PAYMENT: '/checkout/payment',
  FEEDBACK: '/feedback',
}

// Готовые ссылки с параметрами — используются в <Link to={...}>
//   <Link to={getCatalogPath('hot-dishes')}>Горячие блюда</Link>
export const getCatalogPath = (categorySlug) => `/catalog/${categorySlug}`
export const getProductPath = (productId) => `/product/${productId}`
