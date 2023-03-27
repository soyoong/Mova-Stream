import styles from './ButtonIcon.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

function ButtonIcon({ icon, large, onClick, color, underline, underlineActive, underlineHover }) {
  return (
    <button
      className={cx('button-icon', {
        large: large,
        underline: underline,
        'underline-hover': underlineHover,
        'underline-active': underlineActive,
      })}
      onClick={onClick}
    >
      <FontAwesomeIcon className={cx('fa-button')} icon={icon} style={{ color: color }} />
    </button>
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.node.isRequired,
}

export default ButtonIcon
