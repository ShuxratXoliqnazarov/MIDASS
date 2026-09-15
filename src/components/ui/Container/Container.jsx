import { cn } from '@/utils/cn'

// Ограничивает ширину контента как в макете: max 1600px, отступы 20px (phone) / 50px (tablet+)
export default function Container({ as: Tag = 'div', className, children }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[1600px] px-5 md:px-[50px]', className)}>
      {children}
    </Tag>
  )
}
