'use client'
import { Banner } from '@components/layouts'
import WrapperPage from '@components/layouts/WrapperPage'
import Image from 'next/image'
import React from 'react'
import tmdbs from '@utils/tmdb'
import { Movie } from '@utils/typings'

function HomePage() {
  return (
    <WrapperPage header>
      <Banner movies={tmdbs.props.pageProps.netflixOriginals as Movie[]} />
      <div className='min-h-screen'></div>
    </WrapperPage>
  )
}

export default HomePage
