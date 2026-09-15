import { getCategoryBySlug } from './categories'
import { ROUTES } from './routes'

const categories = (...slugs) => slugs.map(getCategoryBySlug)

// Навигация в Header (desktop) и MobileMenu.
// Пункт с children — выпадающий список, без children — ссылка на категорию.
export const HEADER_NAV = [
  { title: 'Акции', category: getCategoryBySlug('promo') },
  { title: 'Горячее', children: categories('hot-dishes', 'soups', 'khinkali') },
  { title: 'Холодное', children: categories('cold-snacks', 'salads', 'sauces') },
  { title: 'Свежая выпечка', category: getCategoryBySlug('bakery') },
  { title: 'Десерты', category: getCategoryBySlug('desserts') },
  { title: 'Напитки', category: getCategoryBySlug('drinks') },
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
