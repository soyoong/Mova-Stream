import styles from './ButtonIcon.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

function ButtonIcon({ icon, src, medium, large, color, underline, underlineActive, underlineHover, onClick }) {
  return (
    <button
      className={cx('button-icon', {
        medium: medium,
        large: large,
        underline: underline,
        'underline-hover': underlineHover,
        'underline-active': underlineActive,
      })}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon className={cx('fa-button')} icon={icon} style={{ color: color }} />}
      {src && <img className={cx('img')} src={src} alt="icon" />}
    </button>
  )
}

export default ButtonIcon
