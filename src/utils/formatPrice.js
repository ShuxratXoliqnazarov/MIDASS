// 2580 → «2 580 ₽»
export const formatPrice = (value) => `${new Intl.NumberFormat('ru-RU').format(value)} ₽`
