import React from 'react'
import styles from './Home.module.scss'
import { Banner } from '~/layouts'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Banner />
      <div>Other slider</div>
    </div>
  )
}

export default Home
