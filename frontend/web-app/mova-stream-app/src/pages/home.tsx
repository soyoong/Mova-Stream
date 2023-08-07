'use client'
// import { Banner } from '~/components/layouts'
import WrapperPage from '~/components/layouts/WrapperPage'
import Image from 'next/image'
import React, { Suspense, lazy } from 'react'
import tmdbs from '~/utils/tmdb'
import { Movie } from '~/utils/typings'
import RowPlaceholder from '~/components/layouts/RowPlaceholder'
const Row = lazy(() => import('~/components/layouts/Row'))
const Banner = lazy(() => import('~/components/layouts/Banner'))

export default function HomePage() {
  const rows = tmdbs.props.pageProps

  return (
    <WrapperPage header>
      <Suspense fallback={<h1 className='text-white'>Loading</h1>}>
        <Banner movies={tmdbs.props.pageProps.netflixOriginals as Movie[]} />
      </Suspense>
      <div className='flex flex-col gap-y-10 pb-10'>
        <RowPlaceholder />
        <Suspense fallback={<RowPlaceholder />}>
          <Row sectionTitle='Netflix Originals' movies={rows.netflixOriginals as Movie[]} />
        </Suspense>
        <Suspense fallback={<RowPlaceholder />}>
          <Row sectionTitle='Trending Now' movies={rows.trendingNow as Movie[]} />
        </Suspense>
        <Suspense fallback={<RowPlaceholder />}>
          <Row sectionTitle='Top Rated' movies={rows.topRated as Movie[]} />
        </Suspense>
        <Suspense fallback={<RowPlaceholder />}>
          <Row sectionTitle='Action Movies' movies={rows.actionMovies as Movie[]} />
        </Suspense>
        <Suspense fallback={<RowPlaceholder />}>
          <Row sectionTitle='Romance Movies' movies={rows.romanceMovies as Movie[]} />
        </Suspense>
        <Suspense fallback={<RowPlaceholder />}>
          <Row sectionTitle='Horror Movies' movies={rows.horrorMovies as Movie[]} />
        </Suspense>
        <Suspense fallback={<RowPlaceholder />}>
          <Row sectionTitle='Comedy Movies' movies={rows.comedyMovies as Movie[]} />
        </Suspense>
        <Suspense fallback={<RowPlaceholder />}>
          <Row sectionTitle='Documentaries' movies={rows.documentaries as Movie[]} />
        </Suspense>
      </div>
    </WrapperPage>
  )
}
