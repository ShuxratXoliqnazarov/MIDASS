import { cn } from '@/utils/cn'

// Серая плашка с весом блюда «430 г»
export default function WeightBadge({ weight, className }) {
  return (
    <span
      className={cn(
        'inline-flex h-[18px] items-center rounded-[3px] bg-white/30 px-[3px] text-tiny md:h-5 md:px-[5px] md:text-caption md:leading-4',
        className,
      )}
    >
      {weight} г
    </span>
  )
}
