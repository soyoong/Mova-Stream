import React, { useEffect, useState } from 'react'
import tmdbData from '~/utils/data/tmdb'
// import { Row } from '~/components'
import { Movie } from '~/utils/mockup/model/Model'
import { Banner, Row } from '~/layouts'

function Home() {
  // useEffect(() => {
  // }, [])

  return (
    <div className='relative'>
      <Banner data={tmdbData.props.pageProps.netflixOriginals as Movie[]} />
      <section className='relative top-[20vh] sm:top-[30vh] md:top-[35vh] lg:top-[50vh] flex flex-col gap-y-10'>
        <Row
          title='Netflix Originals'
          data={tmdbData.props.pageProps.netflixOriginals as Movie[]}
        />
        <Row title='Trending Now' data={tmdbData.props.pageProps.trendingNow as Movie[]} />
        <Row title='Top Rated' data={tmdbData.props.pageProps.topRated as Movie[]} />
        <Row title='Action Movies' data={tmdbData.props.pageProps.actionMovies as Movie[]} />
        <Row title='Romance Movies' data={tmdbData.props.pageProps.romanceMovies as Movie[]} />
        <Row title='Horror Movies' data={tmdbData.props.pageProps.horrorMovies as Movie[]} />
        <Row title='Comedy Movies' data={tmdbData.props.pageProps.comedyMovies as Movie[]} />
        <Row title='Documentaries' data={tmdbData.props.pageProps.documentaries as Movie[]} />
      </section>
    </div>
  )
}

export default Home
