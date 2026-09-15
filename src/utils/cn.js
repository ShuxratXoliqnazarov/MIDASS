import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// tailwind-merge должен знать наши кастомные размеры текста из styles/index.css,
// иначе он спутает text-caption (размер) с text-primary (цвет) и удалит один из них.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['display', 'heading', 'subheading', 'price', 'body', 'caption', 'tiny'],
    },
  },
})

// Склеивает классы Tailwind без конфликтов:
//   cn('px-4 bg-primary', isActive && 'bg-accent', className)
export const cn = (...inputs) => twMerge(clsx(inputs))
