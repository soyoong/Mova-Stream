'use client'
import { cn } from '~/utils/lib'
import React, { LegacyRef, forwardRef, useEffect, useRef, useState } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  expand?: boolean | null
}

const DropDownMenu = React.forwardRef<HTMLDivElement, Props>(
  ({ expand, className, children, ...props }, ref) => {
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
      if (expand) {
        setExpanded(true)
      } else {
        setExpanded(false)
      }
    }, [expand])

    return (
      <>
        {expanded ? (
          <div
            ref={ref}
            className={cn(
              'bg-page absolute right-0 top-14 z-10 flex h-fit max-h-64 w-64 flex-col gap-y-1 rounded-md px-2 py-2 shadow-md',
              ...[className],
            )}
            tabIndex={0}
            onFocus={() => setExpanded(true)}
            onBlur={() => setExpanded(false)}
          >
            {children}
          </div>
        ) : null}
      </>
    )
  },
)
DropDownMenu.displayName = 'DropDownMenu'

export { DropDownMenu }
