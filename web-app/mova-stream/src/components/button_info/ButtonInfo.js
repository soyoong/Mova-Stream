import styles from './ButtonInfo.module.scss'
import classNames from 'classnames/bind'
// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const cx = classNames.bind(styles)

function ButtonInfo() {
  return (
    <div className={cx('wrapper')}>
      <button>
        <FontAwesomeIcon className={cx('fa-button')} icon={solid('circle-info')} />
        Play
      </button>
    </div>
  )
}

export default ButtonInfo
