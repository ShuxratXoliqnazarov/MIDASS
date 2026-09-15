// Варианты сортировки в каталоге
export const SORT_OPTIONS = [
  { id: 'price-asc', title: 'По возрастанию цены' },
  { id: 'price-desc', title: 'По убыванию цены' },
  { id: 'name', title: 'По названию' },
]

// «от» цена считается ценой блюда с несколькими видами
const minPrice = (dish) => dish.priceFrom ?? dish.price

export function sortDishes(dishes, sortId) {
  const sorted = [...dishes]

  if (sortId === 'price-asc') sorted.sort((a, b) => minPrice(a) - minPrice(b))
  if (sortId === 'price-desc') sorted.sort((a, b) => minPrice(b) - minPrice(a))
  if (sortId === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name, 'ru'))

  return sorted
}
