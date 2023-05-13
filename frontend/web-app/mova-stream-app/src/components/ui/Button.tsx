'use client'
import cn from '@lib/cn'
import { BiLoaderAlt } from 'react-icons/bi'
import * as React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean | false
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50',
          ...[className],
        )}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        <div className='flex flex-row items-center justify-center sm:gap-x-1 md:gap-x-2'>
          {isLoading ? <BiLoaderAlt className='h-4 w-4 animate-spin' /> : null}
          {children}
        </div>
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button }
