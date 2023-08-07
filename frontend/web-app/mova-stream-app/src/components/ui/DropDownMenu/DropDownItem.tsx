'use client'
import { cn } from '~/utils/lib'
import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean | false
}

const DropDownItem = React.forwardRef<HTMLDivElement, Props>(
  ({ isActive, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-grey-dark hover:bg-grey flex cursor-pointer justify-between rounded-md px-0 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95',
          ...[className],
        )}
      >
        {children}
      </div>
    )
  },
)
DropDownItem.displayName = 'DropDownItem'

export { DropDownItem }
