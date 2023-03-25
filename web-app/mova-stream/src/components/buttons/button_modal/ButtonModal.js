import styles from './ButtonModal.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

function ButtonModal({ icon, onClick, background, bordered }) {
  return (
    <button
      className={cx('button-modal', {
        background: background,
        bordered: bordered,
      })}
      onClick={onClick}
    >
      <FontAwesomeIcon className={cx('fa-button')} icon={icon} />
    </button>
  )
}

export default ButtonModal
