import styles from './ButtonLike.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonIcon from '../button_icon/ButtonIcon'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const cx = classNames.bind(styles)

function ButtonLike({ small, primary, medium, large, onClick }) {
  const [indexState, setIndexState] = useState(-1)
  const [currentIcon, setCurrentIcon] = useState(regular('thumbs-up'))

  useEffect(() => {
    if (indexState === -1) {
      setCurrentIcon(regular('thumbs-up'))
    }
    if (indexState === 0) {
      setCurrentIcon(solid('thumbs-down'))
    }
    if (indexState === 1) {
      setCurrentIcon(solid('thumbs-up'))
    }
    if (indexState === 2) {
      setCurrentIcon(solid('star'))
    }
  }, [indexState])

  const handleButtonSelector = i => {
    if (indexState === i) {
      setIndexState(-1)
    } else {
      setIndexState(i)
    }
  }

  return (
    <div
      className={cx('wrapper', {
        small: small,
        primary: primary,
        medium: medium,
        large: large,
      })}
    >
      <ButtonIcon icon={currentIcon} onClick={onClick} medium bordered />
      <div className={cx('hover__container')}>
        <ButtonIcon
          className={cx('button__dislike', 'button__icon')}
          icon={regular('thumbs-down')}
          onClick={onClick}
          medium
          hoverColor
          textHover="Like"
        />
        <ButtonIcon
          className={cx('button__like', 'button__icon')}
          icon={regular('thumbs-up')}
          onClick={onClick}
          medium
          hoverColor
          textHover="Dislike"
        />
        <ButtonIcon
          className={cx('button__favorite', 'button__icon')}
          icon={regular('heart')}
          onClick={onClick}
          medium
          hoverColor
          textHover="Favorite"
        />
      </div>
    </div>
  )
}

export default ButtonLike
