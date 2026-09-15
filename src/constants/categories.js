import fireIcon from '@/assets/images/fire.webp'
import bakeryBottom from '@/assets/images/menu/bakery-bottom.webp'
import bakeryIcon from '@/assets/images/menu/bakery-icon.webp'
import bakeryTop from '@/assets/images/menu/bakery-top.webp'
import coldBottom from '@/assets/images/menu/cold-bottom.webp'
import coldTop from '@/assets/images/menu/cold-top.webp'
import dessertsBottom from '@/assets/images/menu/desserts-bottom.webp'
import dessertsIcon from '@/assets/images/menu/desserts-icon.webp'
import dessertsTop from '@/assets/images/menu/desserts-top.webp'
import drinksIcon from '@/assets/images/menu/drinks-icon.webp'
import hotBottom from '@/assets/images/menu/hot-bottom.webp'
import hotTop from '@/assets/images/menu/hot-top.webp'
import khinkaliBottom from '@/assets/images/menu/khinkali-bottom.webp'
import khinkaliTop from '@/assets/images/menu/khinkali-top.webp'
import saladsBottom from '@/assets/images/menu/salads-bottom.webp'
import saladsTop from '@/assets/images/menu/salads-top.webp'
import soupsBottom from '@/assets/images/menu/soups-bottom.webp'
import soupsTop from '@/assets/images/menu/soups-top.webp'

/*
 * Категории меню. slug используется в URL: /catalog/hot-dishes
 *
 * icon, iconWidth — картинка и её ширина (px) в мобильном меню
 * plates — две тарелки на карточке в блоке «Меню» на главной.
 *          x / y / w — позиция и ширина в % от карточки (из Figma, карточка 233×314)
 */
export const CATEGORIES = [
  { slug: 'promo', title: 'Акции', icon: fireIcon, iconWidth: 30 },
  {
    slug: 'hot-dishes',
    title: 'Горячие блюда',
    icon: hotTop,
    iconWidth: 39,
    plates: [
      { src: hotTop, x: 15.5, y: -20.1, w: 69.5 },
      { src: hotBottom, x: 15.5, y: 70.4, w: 69.5 },
    ],
  },
  {
    slug: 'soups',
    title: 'Супы',
    icon: soupsTop,
    iconWidth: 43,
    plates: [
      { src: soupsTop, x: 10.1, y: -28.7, w: 84 },
      { src: soupsBottom, x: 7.4, y: 68.8, w: 85.1 },
    ],
  },
  {
    slug: 'khinkali',
    title: 'Хинкали',
    icon: khinkaliTop,
    iconWidth: 39,
    plates: [
      { src: khinkaliTop, x: 17.6, y: -19, w: 69.5 },
      { src: khinkaliBottom, x: 15.2, y: 69.4, w: 69.5 },
    ],
  },
  {
    slug: 'cold-snacks',
    title: 'Холодные закуски',
    icon: coldTop,
    iconWidth: 39,
    plates: [
      { src: coldTop, x: 15.5, y: -13.7, w: 69.5 },
      { src: coldBottom, x: 15.5, y: 64, w: 69.5 },
    ],
  },
  {
    slug: 'salads',
    title: 'Салаты',
    icon: saladsTop,
    iconWidth: 39,
    plates: [
      { src: saladsTop, x: 16.3, y: -20.7, w: 69.5 },
      { src: saladsBottom, x: 11.4, y: 68, w: 77.3 },
    ],
  },
  { slug: 'sauces', title: 'Соусы' },
  {
    slug: 'bakery',
    title: 'Свежая выпечка',
    icon: bakeryIcon,
    iconWidth: 51,
    plates: [
      { src: bakeryTop, x: 11.4, y: -28.3, w: 77.3 },
      { src: bakeryBottom, x: -6.8, y: 53.8, w: 111.1 },
    ],
  },
  {
    slug: 'desserts',
    title: 'Десерты',
    icon: dessertsIcon,
    iconWidth: 30,
    plates: [
      { src: dessertsTop, x: 18.2, y: -24.8, w: 68.2 },
      { src: dessertsBottom, x: 19.3, y: 75.2, w: 67 },
    ],
  },
  { slug: 'drinks', title: 'Напитки', icon: drinksIcon, iconWidth: 28 },
]

export const getCategoryBySlug = (slug) => CATEGORIES.find((category) => category.slug === slug)
