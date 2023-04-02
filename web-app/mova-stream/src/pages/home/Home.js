import React from 'react'
import styles from './Home.module.scss'
import { Banner } from '~/layouts'
import classNames from 'classnames/bind'
import { Modal, RowItem } from '~/components'
import tmdbData from '~/data/tmdb'
import { Row } from '~/components'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('banner__wrapper')}>
          <Banner />
        </div>
        <div className={cx('list__container')}>
          <Row title={tmdbData.trendingNow.title} data={tmdbData.trendingNow.list} />
          <Row title={tmdbData.topRated.title} data={tmdbData.topRated.list} />
        </div>
      </div>
    </div>
  )
}

export default Home
