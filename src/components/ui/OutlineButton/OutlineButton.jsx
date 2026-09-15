import { Link } from 'react-router-dom'

import { cn } from '@/utils/cn'

// Кнопка с жёлтой рамкой: «3 вида», «Показать еще» (UI kit → btn).
// Передай `to`, чтобы получить ссылку, иначе будет <button>.
export default function OutlineButton({ to, className, children, ...props }) {
  const classes = cn(
    'inline-flex h-[39px] items-center justify-center border border-primary px-3 text-[11px] font-bold uppercase leading-[22px] tracking-[0.1em] text-primary shadow-button transition-colors hover:border-primary-hover hover:text-primary-hover active:bg-primary active:text-black disabled:pointer-events-none disabled:border-muted disabled:text-muted md:h-[42px] md:text-caption',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
