import React from 'react'
import styles from './Home.module.scss'
import { Banner } from '~/layouts'
import classNames from 'classnames/bind'
import { Modal } from '~/components'
import tmdbData from '~/data/tmdb'
import Slider from '~/components/slider/Slider'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('banner-wrapper')}>
          <Banner />
        </div>
        <div className={cx('list-container')}>
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default Home
