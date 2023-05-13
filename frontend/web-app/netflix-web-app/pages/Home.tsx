import React, { useEffect, useState } from 'react'
import tmdbs from '~/tmdb'
import { Banner, Row, WrapperPage } from '~/layouts'
import { Movie } from '~/typings'

function Home() {
  // useEffect(() => {
  // }, [])

  return (
    <div className='relative'>
      <Banner movies={tmdbs.props.pageProps.netflixOriginals as Movie[]} />
      <section className=''>
        <Row title='Trending Now' movies={tmdbs.props.pageProps.trendingNow as Movie[]} />
      </section>
    </div>
  )
}

export default Home
