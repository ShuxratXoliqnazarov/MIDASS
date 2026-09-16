// Ряд лого способов оплаты картой: Mastercard, Visa, МИР, Apple Pay, Google Pay
// Figma: Desktop_Оф.Заказа_Оплата — ряд иконок 385×28
// (нет брендовых SVG в assets — упрощённая текстовая реконструкция логотипов)
export default function CardBrandIcons() {
  return (
    <div className="mt-3 flex h-7 flex-wrap items-center gap-5">
      <span className="flex" aria-label="Mastercard">
        <span className="relative z-10 size-7 rounded-full bg-[#EB001B]" />
        <span className="-ml-3 size-7 rounded-full bg-[#F79E1B]" />
      </span>
      <span className="text-2xl font-black text-white italic">VISA</span>
      <span className="text-xl font-extrabold text-[#4DB45E]">МИР</span>
      <span className="text-base text-white">Apple Pay</span>
      <span className="text-base text-white">
        <span className="font-bold text-[#4285F4]">G</span> Pay
      </span>
    </div>
  )
}
