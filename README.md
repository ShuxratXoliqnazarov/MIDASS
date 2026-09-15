# MIDAS — доставка еды

Командный проект по макету Figma: [MIDAS (Copy)](https://www.figma.com/design/glmPTchlirTih1BcubSugo/MIDAS--Copy-?node-id=0-1)

**Стек:** React 19 · Vite · Tailwind CSS v4 · React Router v7 · JavaScript

## Запуск

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # продакшн-сборка в /dist
npm run lint       # проверка ESLint
npm run format     # автоформат Prettier (+ сортировка классов Tailwind)
```

## Структура

```
MIDAS/
├── public/                     статика как есть (favicon)
├── index.html                  подключение шрифта Montserrat
├── vite.config.js              плагины + алиас @ → src
└── src/
    ├── main.jsx                точка входа
    ├── app/
    │   ├── App.jsx             корень, глобальные провайдеры
    │   └── router.jsx          ВСЕ маршруты
    ├── layouts/
    │   └── MainLayout/         Header + <Outlet /> + Footer
    ├── pages/                  одна папка = одна страница = один владелец
    │   ├── HomePage/
    │   │   ├── HomePage.jsx
    │   │   ├── components/     секции только этой страницы
    │   │   └── index.js
    │   ├── CatalogPage/
    │   ├── ProductPage/
    │   ├── CartPage/
    │   ├── CheckoutPage/
    │   │   └── steps/          ContactsStep, DeliveryStep, PaymentStep
    │   ├── FeedbackPage/
    │   └── NotFoundPage/
    ├── components/             общие компоненты (используются на 2+ страницах)
    │   ├── layout/             Header, Footer, MobileMenu
    │   ├── ui/                 Container, Button, Input, Select, Counter ...
    │   └── common/             ScrollToTop, PagePlaceholder
    ├── constants/              routes, categories, navigation, contacts
    ├── data/                   моковые данные (блюда, цены)
    ├── hooks/                  кастомные хуки (useCart, useMediaQuery ...)
    ├── utils/                  cn(), formatPrice()
    ├── assets/                 images/, icons/
    └── styles/index.css        Tailwind + дизайн-токены из Figma
```

## Маршруты

| URL                      | Страница              | Figma-фрейм                      |
| ------------------------ | --------------------- | -------------------------------- |
| `/`                      | `HomePage`            | Desktop_Главная                  |
| `/catalog/:categorySlug` | `CatalogPage`         | Desktop_Каталог                  |
| `/product/:productId`    | `ProductPage`         | Desktop_Карточка продукта        |
| `/cart`                  | `CartPage`            | Desktop_Корзина                  |
| `/checkout/contacts`     | `CheckoutPage` → шаг 1 | Desktop_Оф.Заказа_Контакты      |
| `/checkout/delivery`     | `CheckoutPage` → шаг 2 | Desktop_Оф.Заказа_Доставка_1/2  |
| `/checkout/payment`      | `CheckoutPage` → шаг 3 | Desktop_Оф.Заказа_Оплата        |
| `/feedback`              | `FeedbackPage`        | Desktop_Об. Связь                |
| `*`                      | `NotFoundPage`        | —                                |

Slug категорий лежат в `src/constants/categories.js` (`hot-dishes`, `soups`, `khinkali` ...).

## Кто что делает

| Часть                         | Ответственный |
| ----------------------------- | ------------- |
| Header / Footer / MobileMenu  | —             |
| UI kit (`components/ui`)      | —             |
| HomePage                      | —             |
| CatalogPage                   | —             |
| ProductPage                   | —             |
| CartPage                      | —             |
| CheckoutPage                  | —             |
| FeedbackPage                  | —             |

## Правила команды

1. **Работай в своей папке.** Всё, что нужно только твоей странице, лежит в `pages/<ТвояPage>/components`.
2. **Общее → в `components/`.** Если компонент нужен двум страницам, перенеси его в `components/ui` и предупреди команду.
3. **Импорты через `@`:** `import Container from '@/components/ui/Container'`. Никаких `../../../`.
4. **Пути только из констант:** `<Link to={ROUTES.CART}>`, `getProductPath(id)`. Не пиши `'/cart'` строкой.
5. **Цвета и шрифты только из токенов** (`bg-primary`, `text-accent`, `text-heading`). Нужен новый цвет → добавь его в `styles/index.css`.
6. **Условные классы через `cn()`:** `cn('px-4', isActive && 'text-primary', className)`.
7. **Именование:** компоненты `PascalCase.jsx`, в каждой папке компонента есть `index.js` с реэкспортом; хуки `useSomething.js`; утилиты `camelCase.js`.
8. **Адаптив mobile-first:** базовые классы для 360px, дальше `md:` (768), `lg:` (1024), `3xl:` (1600).
9. Перед пушем запусти `npm run format && npm run lint`.

## Дизайн-токены (из Figma)

| Токен           | Значение  | Где используется               |
| --------------- | --------- | ------------------------------ |
| `primary`       | `#FBD13E` | кнопки, корзина, активные      |
| `primary-hover` | `#DBB325` | hover кнопок                   |
| `accent`        | `#B70000` | акции, плашки                  |
| `navy`          | `#09234E` | градиент фона, hover меню      |
| `muted`         | `#9EA2AA` | второстепенный текст           |
| `line`          | `#C4C4C4` | бордеры                        |
| `dark`          | `#0F0F11` | фон сайта                      |
| `dark-soft`     | `#1C1B1B` | фон блоков                     |

Шрифт: **Montserrat** (500 основной, 700/800 для цен и акцентов).
Размеры текста: `text-display` 80 · `text-heading` 50 · `text-subheading` 25 · `text-price` 23 · `text-body` 20 · `text-caption` 13 · `text-tiny` 12.
