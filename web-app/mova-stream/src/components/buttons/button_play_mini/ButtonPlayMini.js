import styles from './ButtonPlayMini.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonIcon from '../button_icon/ButtonIcon'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const cx = classNames.bind(styles)

function ButtonPlayMini({ onClick }) {
  return (
    <div className={cx('wrapper')}>
      <FontAwesomeIcon className={cx('fa__icon')} icon={solid('play')} onClick={onClick} />
    </div>
  )
}

export default ButtonPlayMini
