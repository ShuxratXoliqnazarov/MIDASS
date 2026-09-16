import { cn } from '@/utils/cn'

// Жёлтая кнопка отправки шага — «Продолжить», «Подтвердить заказ»
export default function CheckoutButton({ className, children, ...props }) {
  return (
    <button
      type="submit"
      className={cn(
        'inline-flex h-[52px] items-center justify-center bg-primary px-10 text-caption font-bold tracking-[0.1em] text-black uppercase shadow-button transition-colors hover:bg-primary-hover active:bg-black active:text-primary disabled:pointer-events-none disabled:bg-muted',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
