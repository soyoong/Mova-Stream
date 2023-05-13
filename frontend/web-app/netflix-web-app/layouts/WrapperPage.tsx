import React from 'react'

interface WrapperPageProps {
  children: React.ReactNode
}

function WrapperPage({ children }: WrapperPageProps) {
  return <div className='relative'>{children}</div>
}

export default WrapperPage
