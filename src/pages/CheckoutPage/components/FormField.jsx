import { cn } from '@/utils/cn'

// Строка формы чекаута: подпись + белый инпут.
// Figma: Desktop_Оф.Заказа_Контакты/Доставка — «ИМЯ *», «ТЕЛЕФОН *», «УЛИЦА» ...
export default function FormField({ label, required, className, inputClassName, ...inputProps }) {
  return (
    <label className={cn('flex flex-col gap-2 md:flex-row md:items-center md:gap-6', className)}>
      <span className="text-tiny tracking-[0.05em] text-white uppercase md:w-[150px] md:shrink-0">
        {label}
        {required && ' *'}
      </span>
      <input
        {...inputProps}
        required={required}
        className={cn(
          'h-12 w-full max-w-[300px] bg-white px-4 text-caption text-black placeholder-placeholder outline-none',
          inputClassName,
        )}
      />
    </label>
  )
}
