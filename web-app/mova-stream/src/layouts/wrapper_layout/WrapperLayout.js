import React from 'react'
import styles from './WrapperLayout.module.scss'
import classNames from 'classnames/bind'
import { HeaderNav, FooterNav } from '~/layouts'
import { useModalState } from '~/hooks/useRecoilClient'
import { MovieModal } from '../components'

const cx = classNames.bind(styles)

function WrapperLayout({ children }) {
  const [modalState, setModalState] = useModalState()

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper__header')}>
        <HeaderNav />
      </div>
      <div className={cx('wrapper__container')}>{children}</div>
      <div className={cx('wrapper__footer')}>
        <FooterNav />
      </div>
      {modalState && <MovieModal />}
    </div>
  )
}

export default WrapperLayout
