import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface NeuroCardProps extends HTMLAttributes<HTMLDivElement> {
  pressed?: boolean
  hover?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export const NeuroCard = forwardRef<HTMLDivElement, NeuroCardProps>(
  ({ className, pressed = false, hover = true, size = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-background transition-all duration-500',
          size === 'sm' && 'rounded-[1.5rem]',
          size === 'md' && 'rounded-[2rem]',
          size === 'lg' && 'rounded-[3rem]',
          pressed 
            ? 'shadow-[var(--shadow-neuro-inset)]' 
            : 'shadow-[var(--shadow-neuro)]',
          hover && 'hover:shadow-[var(--shadow-neuro-hover)]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

NeuroCard.displayName = 'NeuroCard'

export const NeuroCardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-8', className)}
    {...props}
  />
))
NeuroCardHeader.displayName = 'NeuroCardHeader'

export const NeuroCardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-8 pt-0', className)} {...props} />
))
NeuroCardContent.displayName = 'NeuroCardContent'

