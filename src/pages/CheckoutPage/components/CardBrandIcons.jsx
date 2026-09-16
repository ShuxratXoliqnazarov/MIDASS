// Ряд лого способов оплаты картой: Mastercard, Visa, МИР, Apple Pay, Google Pay
// Figma: Desktop_Оф.Заказа_Оплата — ряд иконок 385×28
// (нет брендовых SVG в assets — упрощённая текстовая реконструкция логотипов)
export default function CardBrandIcons() {
  return (
    <div className="mt-3 flex min-h-7 flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-5">
      <span className="flex shrink-0" aria-label="Mastercard">
        <span className="relative z-10 size-6 rounded-full bg-[#EB001B] md:size-7" />
        <span className="-ml-2.5 size-6 rounded-full bg-[#F79E1B] md:-ml-3 md:size-7" />
      </span>
      <span className="text-xl font-black text-white italic md:text-2xl">VISA</span>
      <span className="text-lg font-extrabold text-[#4DB45E] md:text-xl">МИР</span>
      <span className="text-caption text-white md:text-base">Apple Pay</span>
      <span className="text-caption text-white md:text-base">
        <span className="font-bold text-[#4285F4]">G</span> Pay
      </span>
    </div>
  )
}
