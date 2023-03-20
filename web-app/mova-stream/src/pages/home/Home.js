import React from 'react'
import styles from './Home.module.scss'
import { Banner } from '~/layouts'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Home() {
  return (
    <div>
      <Banner />
    </div>
  )
}

export default Home
