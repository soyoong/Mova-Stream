import styles from './ButtonPlay.module.scss'
import classNames from 'classnames/bind'
// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const cx = classNames.bind(styles)

function ButtonPlay() {
  return (
    <div className={cx('wrapper')}>
      <button>
        <FontAwesomeIcon className={cx('fa-button')} icon={solid('play')} />
        Play
      </button>
    </div>
  )
}

export default ButtonPlay
