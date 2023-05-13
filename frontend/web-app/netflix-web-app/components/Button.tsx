'use client'
import cn from '~/lib/cn'
import { cva, VariantProps } from 'class-variance-authority'
import { BiLoaderAlt } from 'react-icons/bi'
import * as React from 'react'

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',
  {
    variants: {
      styles: {
        default: 'bg-white text-black hover:bg-opacity-80',
        destructive: 'text-white hover:bg-white hover:text-black',
        outline:
          'bg-grey text-white rounded-full hover:bg-opacity-80 border-2 border-grey-light hover:border-white',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        link: 'bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      rounded: {
        rectangle: 'rounded-md',
        circle: 'rounded-full',
      },
      fillColor: {
        grey: 'bg-grey',
        greyDark: 'bg-grey-dark',
        greyLight: 'bg-grey-light',
        red: 'bg-primary-red',
        white: 'bg-white',
        black: 'bg-black',
      },
      size: {
        default: 'w-fit h-fit px-6 py-2 text-base',
        sm: 'w-fit h-fit px-3 py-1 text-sm',
        lg: 'w-fit h-fit px-8 py-3 text-xl font-semibold',
      },
    },
    defaultVariants: {
      styles: 'default',
      size: 'default',
      rounded: 'rectangle',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean | false
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, fillColor, rounded, styles, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ styles, rounded, size, fillColor, className }))}
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

export { Button, buttonVariants }
