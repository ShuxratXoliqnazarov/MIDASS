import { cn } from '@/utils/cn'

// Переключаемая опция (радио): variant="card" — способ доставки (блок с рамкой),
// variant="row" — способ оплаты (строка). Выбранная — жёлтая рамка/точка.
export default function RadioOption({
  name,
  value,
  checked,
  onChange,
  variant = 'row',
  className,
  children,
}) {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-start gap-3 border p-5 transition-colors',
        checked ? 'border-primary' : 'border-line/40 hover:border-line',
        variant === 'card' && 'flex-1',
        className,
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          'mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border',
          checked ? 'border-primary' : 'border-line',
        )}
      >
        {checked && <span className="size-2 rounded-full bg-primary" />}
      </span>
      <span className="flex-1">{children}</span>
    </label>
  )
}
