import styles from './PopbarWrapper.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'

const cx = classNames.bind(styles)

function PopBarWrapper({ behindOnClick, children }) {
  const [behindState, setBehindState] = useState(false)

  return (
    <div className={`${cx('wrapper')}`}>
      <div
        className={cx('behind-layout')}
        onClick={even => {
          setBehindState(!behindState)
          behindOnClick(even, behindState)
        }}
      ></div>

      <div className={`${cx('container')}`}>{children}</div>
    </div>
  )
}

export default PopBarWrapper
