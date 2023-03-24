import styles from './ButtonInfo.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const cx = classNames.bind(styles)

function ButtonInfo({ onClick }) {
  return (
    <div className={cx('wrapper')}>
      <button onClick={onClick}>
        More Info
        <FontAwesomeIcon className={cx('fa-button')} icon={solid('circle-info')} />
      </button>
    </div>
  )
}

export default ButtonInfo
