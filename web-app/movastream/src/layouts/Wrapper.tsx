import React, { useRef, useState } from 'react'
import { WrapperPage } from '~/layouts'

interface WrapperProps {
  children: React.ReactNode
  singlePage?: boolean | undefined
}

function Wrapper({ singlePage, children }: WrapperProps) {
  return (
    <div className='relative before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-page before:-z-[100]'>
      {!singlePage ? <WrapperPage header>{children}</WrapperPage> : children}
    </div>
  )
}

export default Wrapper
