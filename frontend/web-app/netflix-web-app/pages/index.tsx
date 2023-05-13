import React from 'react'
import type { NextPage } from 'next'
// import Head from 'next/head'
import { Header, Modal } from '../layouts'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Home from './Home'
import Head from 'next/head'

const App = () => {
  const showModal = useRecoilValue(modalState)

  return (
    <div className='relative'>
      <Head>
        <title>Mova Stream</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Header /> */}
      <main className='relative'>
        <Home />
      </main>
    </div>
  )
}

export default App
