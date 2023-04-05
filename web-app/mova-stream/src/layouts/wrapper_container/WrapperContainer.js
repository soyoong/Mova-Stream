import React from 'react'
import styles from './WrapperContainer.module.scss'
import classNames from 'classnames/bind'
import { BannerImage } from '~/layouts'

const cx = classNames.bind(styles)

function WrapperContainer({ children, listBanner }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper__container')}>
        {listBanner && <BannerImage listData={listBanner} />}
        <div className={cx('wrapper__content')}>{children}</div>
      </div>
    </div>
  )
}

export default WrapperContainer
