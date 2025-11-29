import { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  variant?: 'light' | 'outline'
}

export default function Badge({ children, variant = 'light' }: BadgeProps) {
  const classes =
    variant === 'light'
      ? 'bg-white/10 text-white'
      : 'border border-white/25 text-white/80 bg-transparent'
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${classes}`}>
      {children}
    </span>
  )
}
