import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Container from '@/components/ui/Container'
import OutlineButton from '@/components/ui/OutlineButton'
import { ROUTES } from '@/constants/routes'
import { getDishById } from '@/data/dishes'
import { useCart } from '@/hooks/useCart'

import CartItemRow from './components/CartItemRow'
import CartSummary from './components/CartSummary'

// URL: /cart
// Figma: Desktop_Корзина
export default function CartPage() {
  const { items, count } = useCart()

  const cartLines = items
    .map((item) => ({ item, dish: getDishById(item.id) }))
    .filter(({ dish }) => Boolean(dish))

  const totalAmount = cartLines.reduce(
    (sum, { item, dish }) => sum + dish.price * item.quantity,
    0,
  )

  return (
    <Container className="pt-[34px] pb-[80px] md:pt-[15px] md:pb-[140px] lg:pt-2 lg:pb-[180px]">
      <h1 className="text-title md:text-display">
        Корзина {count > 0 && <span className="text-primary">{count} шт</span>}
      </h1>

      <Breadcrumbs
        items={[{ title: 'Главная', to: ROUTES.HOME }, { title: 'Корзина' }]}
        className="mt-[11px] md:mt-[10px]"
      />

      {cartLines.length > 0 ? (
        <div className="mt-8 md:mt-12">
          {/* Шапка таблицы (Desktop) */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_120px_140px_140px_42px] lg:gap-4 px-6 pb-3 text-tiny tracking-[0.05em] text-muted uppercase">
            <span>Блюдо:</span>
            <span className="text-center">Цена:</span>
            <span className="text-center">Кол-во:</span>
            <span className="text-center">Сумма:</span>
            <span aria-hidden="true" />
          </div>

          {/* Список позиций в корзине */}
          <div className="flex flex-col gap-3">
            {cartLines.map(({ item, dish }) => (
              <CartItemRow key={item.id} item={item} dish={dish} />
            ))}
          </div>

          {/* Подвал корзины: промокод + итого к оплате + кнопка оформления */}
          <div className="mt-8 flex justify-end md:mt-12">
            <CartSummary totalAmount={totalAmount} />
          </div>
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-start gap-6 md:mt-24">
          <p className="text-body">Ваша корзина пуста</p>
          <p className="max-w-[420px] text-caption text-muted">
            Выберите любимые блюда из нашего меню, и мы быстро доставим их горячими!
          </p>
          <OutlineButton to={ROUTES.HOME} className="px-8">
            Перейти в меню
          </OutlineButton>
        </div>
      )}
    </Container>
  )
}
