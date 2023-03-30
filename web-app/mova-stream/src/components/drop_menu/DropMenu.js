import styles from './DropMenu.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'

const cx = classNames.bind(styles)

function DropMenu({ behindOnClick, overflowHidden, children }) {
  const [behindState, setBehindState] = useState(false)

  return (
    <div
      className={`box-shadow ${cx('wrapper', {
        'overflow-hidden': overflowHidden,
      })}`}
    >
      <div
        className={cx('behind-layout')}
        onClick={even => {
          setBehindState(!behindState)
          behindOnClick(even, behindState)
        }}
      ></div>

      <div className={` ${cx('container')}`}>{children}</div>
    </div>
  )
}

export default DropMenu
