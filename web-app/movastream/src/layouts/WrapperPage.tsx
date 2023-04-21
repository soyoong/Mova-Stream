import React from 'react'
import { HeaderNavigation } from '~/layouts'

interface WrapperPageProps {
  children: React.ReactNode
  header?: boolean | undefined
  footer?: boolean | undefined
}

function WrapperPage({ header, footer, children }: WrapperPageProps) {
  return (
    <div className='relative overflow-hidden'>
      {header === true && <HeaderNavigation />}
      <main className='relative'>{children}</main>
    </div>
  )
}

export default WrapperPage
