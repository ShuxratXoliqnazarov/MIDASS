import { cn } from '@/utils/cn'
 
// Декоративная сетка из белых точек. Размер задаётся через className (size-[184px]).
export default function DotsPattern({ className }) {
  return <div aria-hidden="true" className={cn('pointer-events-none dots-pattern', className)} />
}
