import styles from './ButtonIcon.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

function ButtonIcon({
  icon,
  src,
  medium,
  large,
  hoverTitle,
  color,
  underline,
  underlineActive,
  underlineHover,
  onClick,
}) {
  return (
    <div
      className={cx('wrapper', {
        underline: underline,
        'underline-hover': underlineHover,
        'underline-active': underlineActive,
      })}
    >
      <button
        className={cx('primary', {
          medium: medium,
          large: large,
        })}
        onClick={onClick}
      >
        {icon && <FontAwesomeIcon className={cx('fa-button')} icon={icon} style={{ color: color }} />}
        {src && <img className={cx('img')} src={src} alt="icon" />}
      </button>
    </div>
  )
}

export default ButtonIcon
