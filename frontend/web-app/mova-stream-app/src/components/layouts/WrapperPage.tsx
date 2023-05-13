'use client'
import React from 'react'
import NavBarHeader from './NavBarHeader'

interface WrapperPageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  header: boolean | null
}

function WrapperPage({ children, header }: WrapperPageProps) {
  return (
    <div className='relative'>
      <NavBarHeader />
      <div className=''>{children}</div>
    </div>
  )
}

export default WrapperPage
