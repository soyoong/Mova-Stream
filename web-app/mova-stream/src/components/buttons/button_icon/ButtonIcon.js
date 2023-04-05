import styles from './ButtonIcon.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const cx = classNames.bind(styles)

function ButtonIcon({
  icon,
  src,
  small,
  primary,
  medium,
  large,
  color,
  textHover,
  bordered,
  grounded,
  borderRadius,
  backgroundColor,
  opacity,
  className,
  onClick,
}) {
  const [onMouseState, setOnMouseState] = useState(false)

  const handleOnMouse = i => {
    if (i === 0) {
      setOnMouseState(true)
    }
    if (i === -1) {
      setOnMouseState(false)
    }
  }

  return (
    <div
      className={cx('wrapper', {
        [className]: className,
        small: small,
        primary: primary,
        medium: medium,
        large: large,
      })}
    >
      <button
        id="button__icon"
        onMouseOver={() => handleOnMouse(0)}
        onMouseLeave={() => handleOnMouse(-1)}
        onClick={onClick}
        style={{
          opacity: `${opacity}`,
          border: `${bordered === true ? `2px solid ${onMouseState ? 'white' : 'rgba(148,148,148)'}` : bordered}`,
          backgroundColor: `${
            backgroundColor === true
              ? 'rgba(48, 48, 48, 1)'
              : onMouseState
              ? 'rgba(148, 148, 148, 0.5)'
              : 'rgba(48, 48, 48, 1)'
          }`,
          borderRadius: `${(grounded === undefined ? true : grounded) ? '50px' : borderRadius}`,
        }}
      >
        {icon && <FontAwesomeIcon className={cx('fa__icon')} icon={icon} color={color ? color : 'white'} />}
        {src && <img className={cx('img__src')} src={src} alt="icon" />}
      </button>
      <div
        className={cx('fake__layer', {
          'text-hover': textHover,
        })}
      >
        {textHover}
      </div>
    </div>
  )
}

export default ButtonIcon
