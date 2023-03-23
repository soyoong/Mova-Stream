import React from 'react'
import styles from './MovieModal.module.scss'
import { Modal } from '~/components'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function MovieModal() {
  return (
    <Modal>
      <div className={cx('content')}>
        <p>This is content</p>
      </div>
    </Modal>
  )
}

export default MovieModal
