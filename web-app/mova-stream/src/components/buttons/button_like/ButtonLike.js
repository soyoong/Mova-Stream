import styles from './ButtonLike.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonIcon from '../button_icon/ButtonIcon'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const cx = classNames.bind(styles)

function ButtonLike({ onClick }) {
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
    <div className={cx('wrapper')}>
      <FontAwesomeIcon className={cx('fa__icon')} icon={currentIcon} onClick={onClick} />
      <div className={cx('popbar_wrapper')}>
        <div className={cx('popbar__over')}>
          <button className={cx('btn__dislike')} onClick={() => handleButtonSelector(0)}>
            <FontAwesomeIcon
              className={cx('fa__icon')}
              color="white"
              icon={indexState === 0 ? solid('thumbs-down') : regular('thumbs-down')}
            />
          </button>
          <button className={cx('btn__like')} onClick={() => handleButtonSelector(1)}>
            <FontAwesomeIcon
              className={cx('fa__icon')}
              color="white"
              icon={indexState === 1 ? solid('thumbs-up') : regular('thumbs-up')}
            />
          </button>
          <button className={cx('btn__favorite')} onClick={() => handleButtonSelector(2)}>
            <FontAwesomeIcon
              className={cx('fa__icon')}
              color="white"
              icon={indexState === 2 ? solid('star') : regular('star')}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ButtonLike
