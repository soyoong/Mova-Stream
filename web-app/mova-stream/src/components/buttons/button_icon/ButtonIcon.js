import styles from './ButtonIcon.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

function ButtonIcon({
  icon,
  src,
  small,
  medium,
  large,
  bordered,
  color,
  background,
  opacity,
  underlineActive,
  underlineHover,
  onClick,
}) {
  return (
    <div className={cx('wrapper')}>
      <button
        className={cx('primary', {
          bordered: bordered,
          background: background,
          opacity: opacity,
          small: small,
          medium: medium,
          large: large,
          'underline-hover': underlineHover,
          'underline-active': underlineActive,
        })}
        onClick={onClick}
        style={{ opacity: opacity }}
      >
        {icon && <FontAwesomeIcon className={cx('fa-button')} icon={icon} color={color} />}
        {src && <img className={cx('img')} src={src} alt="icon" />}
      </button>
    </div>
  )
}

export default ButtonIcon
