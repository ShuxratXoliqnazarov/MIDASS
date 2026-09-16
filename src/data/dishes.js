import chikhokhbili from '@/assets/images/dishes/chikhokhbili.jpg'
import cutletRustic1 from '@/assets/images/dishes/cutlet-rustic-1.jpg'
import cutletRustic2 from '@/assets/images/dishes/cutlet-rustic-2.jpg'
import cutletRustic3 from '@/assets/images/dishes/cutlet-rustic-3.jpg'
import dolma from '@/assets/images/dishes/dolma.jpg'
import khachapuriAdjarian1 from '@/assets/images/dishes/khachapuri-adjarian-1.jpg'
import khachapuriAdjarian2 from '@/assets/images/dishes/khachapuri-adjarian-2.jpg'
import khachapuriMegrelian1 from '@/assets/images/dishes/khachapuri-megrelian-1.jpg'
import khachapuriMegrelian2 from '@/assets/images/dishes/khachapuri-megrelian-2.jpg'
import khinkaliFried1 from '@/assets/images/dishes/khinkali-fried-1.jpg'
import khinkaliFried2 from '@/assets/images/dishes/khinkali-fried-2.jpg'
import khinkaliTraditional1 from '@/assets/images/dishes/khinkali-traditional-1.jpg'
import khinkaliTraditional2 from '@/assets/images/dishes/khinkali-traditional-2.jpg'
import lobio from '@/assets/images/dishes/lobio.jpg'
import lunchLowCalorie1 from '@/assets/images/dishes/lunch-low-calorie-1.jpg'
import lunchLowCalorie2 from '@/assets/images/dishes/lunch-low-calorie-2.jpg'
import odzhakhuri from '@/assets/images/dishes/odzhakhuri.jpg'
import salmonSteak from '@/assets/images/dishes/salmon-steak.jpg'
import tiramisu from '@/assets/images/tiramisu.webp'

/*
 * Моковые данные блюд (тексты и цены из Figma).
 *
 * category  — slug из constants/categories.js
 * weight    — граммы
 * price     — цена в ₽; oldPrice — зачёркнутая цена (скидка, попадает в «Акции»)
 * priceFrom — «от» цена, если у блюда несколько видов (variants)
 */
export const DISHES = [
  {
    id: 'cutlet-rustic',
    category: 'hot-dishes',
    name: 'Котлета с картофелем по-деревенски',
    weight: 350,
    description:
      'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми фермерскими овощами',
    price: 430,
    priceFrom: 410,
    variants: 3,
    image: cutletRustic3,
  },
  {
    id: 'odzhakhuri',
    category: 'hot-dishes',
    name: 'Оджахури из телятины',
    weight: 430,
    description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    price: 490,
    image: odzhakhuri,
  },
  {
    id: 'dolma',
    category: 'hot-dishes',
    name: 'Долма',
    weight: 350,
    description:
      'Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая в виноградные листья',
    price: 430,
    priceFrom: 410,
    variants: 2,
    varieties: [
      { id: 'lamb', name: 'С бараниной', weight: 80, price: 490 },
      { id: 'beef', name: 'С говядиной', weight: 80, price: 430 },
    ],
    image: dolma,
  },
  {
    id: 'chikhokhbili',
    category: 'hot-dishes',
    name: 'Чихохбили',
    weight: 350,
    description:
      'Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая в виноградные листья',
    price: 490,
    image: chikhokhbili,
  },
  {
    id: 'lobio',
    category: 'hot-dishes',
    name: 'Лобио по-имеретински',
    weight: 430,
    description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    price: 490,
    image: lobio,
  },
  {
    id: 'salmon-steak',
    category: 'hot-dishes',
    name: 'Стейк из лосося с овощами',
    weight: 250,
    description:
      'Нежный стейк дикого лосося, пропитанный соком и ароматом слегка обжаренных фермерских овощей',
    price: 1200,
    image: salmonSteak,
  },
  {
    id: 'khinkali-traditional',
    category: 'khinkali',
    name: 'Хинкали традиционные (6шт)',
    weight: 350,
    description: 'Пряные хинкали с начинкой из ароматной баранины со специями.',
    price: 495,
    oldPrice: 620,
    image: khinkaliTraditional1,
  },
  {
    id: 'khinkali-fried',
    category: 'khinkali',
    name: 'Хинкали жаренные',
    weight: 350,
    description:
      'Плотно-шелковые хинкали с сочной начинкой на выбор: из фермерской говядины, сыра моцарелла либо фермерской баранины и экологически чистой зелени',
    price: 115,
    priceFrom: 115,
    variants: 3,
    varieties: [
      { id: 'cheese', name: 'С сыром', weight: 80, price: 125 },
      { id: 'traditional', name: 'Традиционные', weight: 80, price: 115 },
      { id: 'lamb-tarragon', name: 'Из баранины с тархуном', weight: 80, price: 125 },
    ],
    recommendedDishIds: ['khachapuri-adjarian', 'lunch-low-calorie', 'khachapuri-megrelian'],
    image: khinkaliFried1,
  },
  {
    id: 'khachapuri-adjarian',
    category: 'bakery',
    name: 'Хачапури по-аджарски',
    weight: 430,
    description: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
    price: 470,
    image: khachapuriAdjarian1,
  },
  {
    id: 'khachapuri-megrelian',
    category: 'bakery',
    name: 'Хачапури по-мегрельски',
    weight: 430,
    description: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    price: 490,
    image: khachapuriMegrelian1,
  },
  {
    id: 'lunch-low-calorie',
    category: 'salads',
    name: 'Ланч низкокалорийный',
    weight: 450,
    description:
      'Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс',
    price: 1148,
    oldPrice: 1435,
    image: lunchLowCalorie1,
  },
  {
    id: 'tiramisu',
    category: 'desserts',
    name: 'Тирамису',
    weight: 430,
    description: 'Нежный итальянский десерт с маскарпоне и кофейной пропиткой',
    price: 370,
    image: tiramisu,
  },
]

export const getDishById = (id) => {
  if (!id) return undefined
  if (id.includes('--')) {
    const [baseId, varId] = id.split('--')
    const baseDish = DISHES.find((dish) => dish.id === baseId)
    if (baseDish) {
      const variety = baseDish.varieties?.find((v) => v.id === varId)
      if (variety) {
        return {
          ...baseDish,
          id,
          baseId,
          name: baseDish.name,
          varietyName: variety.name,
          fullName: `${baseDish.name} (${variety.name})`,
          price: variety.price,
          weight: variety.weight,
        }
      }
    }
  }
  return DISHES.find((dish) => dish.id === id)
}

// «Акции» — все блюда со скидкой, остальные категории — по полю category
export const getDishesByCategory = (slug) =>
  slug === 'promo'
    ? DISHES.filter((dish) => dish.oldPrice)
    : DISHES.filter((dish) => dish.category === slug)

// Главная → «Популярные блюда» (порядок и фото как в макете)
export const POPULAR_DISHES = [
  { id: 'khachapuri-adjarian', image: khachapuriAdjarian1 },
  { id: 'khinkali-traditional', image: khinkaliTraditional1 },
  { id: 'khinkali-fried', image: khinkaliFried1 },
  { id: 'lunch-low-calorie', image: lunchLowCalorie1 },
  { id: 'khachapuri-megrelian', image: khachapuriMegrelian1 },
  { id: 'cutlet-rustic', image: cutletRustic1 },
  { id: 'khinkali-traditional', image: khinkaliTraditional2 },
  { id: 'khachapuri-megrelian', image: khachapuriMegrelian2 },
  { id: 'khachapuri-adjarian', image: khachapuriAdjarian2 },
  { id: 'cutlet-rustic', image: cutletRustic2 },
  { id: 'khinkali-fried', image: khinkaliFried2 },
  { id: 'lunch-low-calorie', image: lunchLowCalorie2 },
].map(({ id, image }) => ({ dish: getDishById(id), image }))

// Главная → первый экран
export const HERO_DISH_ID = 'salmon-steak'
export const FEATURED_DESSERT_ID = 'tiramisu'
