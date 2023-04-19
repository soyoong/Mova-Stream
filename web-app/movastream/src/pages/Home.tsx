import React, { useEffect, useState } from 'react'
import tmdbData from '~/utils/data/tmdb'
// import { Row } from '~/components'
// import { useModalProps } from '~/utils/hooks/useRecoilClient'
import { Movie } from '~/utils/mockup/model/Model'
import { CarouselBanner, Row, WrapperPage } from '~/layouts'

function Home() {
  // useEffect(() => {
  // }, [])

  return (
    <div className='min-h-[1500px]'>
      <CarouselBanner data={tmdbData.props.pageProps.netflixOriginals as Movie[]} />
      <div className='relative flex flex-col gap-y-12 top-[-18rem] z-20'>
        <Row data={tmdbData.props.pageProps.netflixOriginals as Movie[]} />
        <Row data={tmdbData.props.pageProps.trendingNow as Movie[]} />
        <Row data={tmdbData.props.pageProps.topRated as Movie[]} />
        <Row data={tmdbData.props.pageProps.actionMovies as Movie[]} />
        <Row data={tmdbData.props.pageProps.romanceMovies as Movie[]} />
        <Row data={tmdbData.props.pageProps.horrorMovies as Movie[]} />
        <Row data={tmdbData.props.pageProps.comedyMovies as Movie[]} />
        <Row data={tmdbData.props.pageProps.documentaries as Movie[]} />
      </div>
    </div>
  )
}

export default Home
