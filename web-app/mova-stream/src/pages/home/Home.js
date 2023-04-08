import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { Banner, BannerImage, BannerOverview, WrapperContainer } from '~/layouts'
import classNames from 'classnames/bind'
import { Modal, RowItem } from '~/components'
import tmdbData from '~/utils/data/tmdb'
import { Row } from '~/components'
import { useModalProps } from '~/utils/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function Home() {
  const [modalProps, setModalProps] = useModalProps()

  return (
    <WrapperContainer listBanner={tmdbData.netflixOriginals.list}>
      <div className={cx('wrapper__container')}>
        <div className={cx('wrapper__banner_overview')}>
          <BannerOverview />
        </div>
        <div className={cx('list__container')}>
          <Row title={tmdbData.trendingNow.title} data={tmdbData.trendingNow.list} />
          <Row title={tmdbData.topRated.title} data={tmdbData.topRated.list} />
        </div>
      </div>
      {/* <div className={cx('wrapper')}>
        <div className={cx('container')}> */}
      {/* <Banner /> */}

      {/* </div> */}
      {/* </div> */}
    </WrapperContainer>
  )
}

export default Home
