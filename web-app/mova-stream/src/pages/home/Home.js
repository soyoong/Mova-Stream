import React from 'react'
import styles from './Home.module.scss'
import { Banner } from '~/layouts'
import classNames from 'classnames/bind'
import { Modal } from '~/components'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Banner />
      {/* <Modal /> */}
    </div>
  )
}

export default Home
