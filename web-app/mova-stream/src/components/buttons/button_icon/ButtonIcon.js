import styles from './ButtonIcon.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

function ButtonIcon({
  icon,
  src,
  small,
  primary,
  medium,
  large,
  color,
  radius,
  textHover,
  hoverColor,
  bordered,
  backgroundColor,
  opacity,
  className,
  onClick,
}) {
  useEffect(() => {
    var buttonIcon = document.getElementById('button__icon')
    // var buttnIconAfter = window.getComputedStyle(buttonIcon, '::after')
  }, [])

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
        className={cx({
          radius: radius,
          bordered: bordered,
          'hover-color': hoverColor,
        })}
        onClick={onClick}
        style={{
          opacity: `${opacity}`,
          backgroundColor: `${backgroundColor}`,
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
