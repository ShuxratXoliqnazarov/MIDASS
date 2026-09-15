import { ROUTES, getCatalogPath } from './routes'

// Пункты навигации в Header (desktop) и MobileMenu
export const HEADER_NAV = [
  { title: 'Акции', to: getCatalogPath('promo') },
  { title: 'Горячее', to: getCatalogPath('hot-dishes') },
  { title: 'Холодное', to: getCatalogPath('cold-snacks') },
  { title: 'Свежая выпечка', to: getCatalogPath('bakery') },
  { title: 'Десерты', to: getCatalogPath('desserts') },
  { title: 'Напитки', to: getCatalogPath('drinks') },
]

// Ссылки в Footer. Для страниц, которых нет в макете, пока стоит '#'
export const FOOTER_NAV = [
  { title: 'Обратная связь', to: ROUTES.FEEDBACK },
  { title: 'Доставка', to: '#' },
  { title: 'Оплата', to: '#' },
  { title: 'Контакты', to: '#' },
]

export const FOOTER_LEGAL = [
  { title: 'Политика конфиденциальности и оферта', to: '#' },
  { title: 'Пользовательское соглашение', to: '#' },
]
