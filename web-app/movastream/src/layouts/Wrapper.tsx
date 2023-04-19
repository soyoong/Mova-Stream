import React, { useRef, useState } from 'react'
import { WrapperPage } from '~/layouts'

interface WrapperProps {
  children: React.ReactNode
  singlePage?: boolean | undefined
}

function Wrapper({ singlePage, children }: WrapperProps) {
  return (
    <div className=''>{!singlePage ? <WrapperPage header>{children}</WrapperPage> : children}</div>
  )
}

export default Wrapper
