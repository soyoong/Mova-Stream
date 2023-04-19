import React from 'react'
import { HeaderNavigation } from '~/layouts'

interface WrapperPageProps {
  children: React.ReactNode
  header?: boolean | undefined
}

function WrapperPage({ header, children }: WrapperPageProps) {
  return (
    <div className='bg-page overflow-hidden'>
      {header === true && <HeaderNavigation />}
      <div className='relative'>{children}</div>
    </div>
  )
}

export default WrapperPage
