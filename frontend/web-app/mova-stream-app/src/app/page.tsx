'use client'
import Modal from '@components/layouts/Modal'
import { useModalState } from '@hooks/useUI'
import HomePage from '@pages/HomePage'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const modalState = useModalState()

  return (
    <div className='relative'>
      <main>
        <HomePage />
      </main>
      {modalState.isShow ? <Modal /> : null}
    </div>
  )
}
