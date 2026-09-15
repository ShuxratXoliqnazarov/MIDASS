// Категории меню из макета (блок «Меню» на главной и навигация в хедере).
// slug используется в URL: /catalog/hot-dishes
export const CATEGORIES = [
  { slug: 'promo', title: 'Акции' },
  { slug: 'hot-dishes', title: 'Горячие блюда' },
  { slug: 'soups', title: 'Супы' },
  { slug: 'khinkali', title: 'Хинкали' },
  { slug: 'cold-snacks', title: 'Холодные закуски' },
  { slug: 'salads', title: 'Салаты' },
  { slug: 'sauces', title: 'Соусы' },
  { slug: 'bakery', title: 'Свежая выпечка' },
  { slug: 'desserts', title: 'Десерты' },
  { slug: 'drinks', title: 'Напитки' },
]

export const getCategoryBySlug = (slug) => CATEGORIES.find((category) => category.slug === slug)
