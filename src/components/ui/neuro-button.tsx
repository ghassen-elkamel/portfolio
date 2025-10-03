import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface NeuroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
  size?: 'default' | 'sm' | 'lg'
}

export const NeuroButton = forwardRef<HTMLButtonElement, NeuroButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-[1.5rem] transition-all duration-500',
          'font-semibold focus:outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'shadow-[var(--shadow-neuro)] hover:shadow-[var(--shadow-neuro-inset)] active:shadow-[var(--shadow-neuro-inset)]',
          variant === 'default' && 'bg-background text-foreground',
          variant === 'primary' && 'bg-primary text-primary-foreground',
          variant === 'secondary' && 'bg-secondary text-secondary-foreground',
          variant === 'accent' && 'bg-accent text-accent-foreground',
          size === 'default' && 'px-8 py-4',
          size === 'sm' && 'px-6 py-3 text-sm',
          size === 'lg' && 'px-10 py-5 text-lg',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

NeuroButton.displayName = 'NeuroButton'

