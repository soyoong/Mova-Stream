"use client"
import cn from '@lib/cn'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const DropDown = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('absolute right-0 top-10 h-96 w-24 bg-slate-600', ...[className])}
        {...props}
      >
        {children}
        <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black'>bg</div>
      </div>
    )
  },
)
DropDown.displayName = 'DropDown'

export { DropDown }