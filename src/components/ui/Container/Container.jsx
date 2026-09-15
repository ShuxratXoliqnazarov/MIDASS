import { cn } from '@/utils/cn'

// Ограничивает ширину контента как в макете: max 1600px,
// отступы по краям: 15px (phone) / 20px (tablet) / 50px (desktop) — переменная --page-x
export default function Container({ as: Tag = 'div', className, children }) {
  return <Tag className={cn('mx-auto w-full max-w-[1600px] px-page', className)}>{children}</Tag>
}
