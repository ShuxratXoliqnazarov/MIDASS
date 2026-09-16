// Ряд лого способов оплаты картой: Mastercard, Visa, МИР, Apple Pay, Google Pay
// (нет брендовых SVG в assets — упрощённая текстовая реконструкция логотипов)
export default function CardBrandIcons() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-4">
      <span className="flex" aria-label="Mastercard">
        <span className="relative z-10 size-5 rounded-full bg-[#EB001B]" />
        <span className="-ml-2 size-5 rounded-full bg-[#F79E1B]" />
      </span>
      <span className="text-[15px] font-black text-white italic">VISA</span>
      <span className="text-[13px] font-extrabold text-[#4DB45E]">МИР</span>
      <span className="text-[13px] text-white"> Pay</span>
      <span className="text-[13px] text-white">G Pay</span>
    </div>
  )
}
