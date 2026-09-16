import { cn } from '@/utils/cn'

// Строка формы чекаута: подпись + белый инпут.
// Figma: Desktop_Оф.Заказа_Контакты/Доставка — «ИМЯ *», «ТЕЛЕФОН *», «УЛИЦА» ...
export default function FormField({ label, required, className, inputClassName, ...inputProps }) {
  return (
    <label className={cn('flex flex-col gap-2', className)}>
      <span className="text-tiny tracking-[0.05em] text-white uppercase">
        {label}
        {required && ' *'}
      </span>
      <input
        {...inputProps}
        required={required}
        className={cn(
          'h-11 w-full max-w-[350px] bg-white px-4 text-caption text-black placeholder-placeholder outline-none',
          inputClassName,
        )}
      />
    </label>
  )
}
