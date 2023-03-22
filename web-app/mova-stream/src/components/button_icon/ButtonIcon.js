import styles from './ButtonIcon.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

function ButtonIcon({ icon, onClick, large }) {
  return (
    <div className={cx('wrapper')}>
      <button onClick={onClick}>
        <FontAwesomeIcon
          className={cx('fa-button', {
            'large-icon': large,
          })}
          icon={icon}
        />
      </button>
    </div>
  )
}

export default ButtonIcon
