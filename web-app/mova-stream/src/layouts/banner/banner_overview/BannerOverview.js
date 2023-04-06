import React from 'react'
import styles from './BannerOverview.module.scss'
import classNames from 'classnames/bind'
import { ButtonInfo, ButtonPlay } from '~/components'
import { useModalProps, useModalState } from '~/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function BannerOverview() {
  const [modalProps, setModalProps] = useModalProps()
  const [modalState, setModalState] = useModalState()

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper__container')}>
        <h1>{modalProps.title}</h1>
        <p>{modalProps.overview}</p>
        <div className={cx('wrapper__buttons')}>
          <ButtonPlay
            medium
            onClick={() => {
              console.log('Play')
            }}
          />
          <ButtonInfo
            medium
            onClick={() => {
              setModalState(!modalState)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default BannerOverview
