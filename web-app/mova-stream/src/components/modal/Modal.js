import React, { useState } from 'react'
import styles from './Modal.module.scss'
import classNames from 'classnames/bind'
import { useSetRecoilState } from 'recoil'
import { modal } from '~/lib/recoil'

const cx = classNames.bind(styles)

function Modal({ children }) {
  const setShowModal = useSetRecoilState(modal.modalState)

  window.onkeyup = function (e) {
    if (e.keyCode === 27) {
      setShowModal(false)
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('bg-container')} onClick={() => setShowModal(false)}></div>
      <div className={cx('container')}>{children}</div>
    </div>
  )
}

export default Modal
