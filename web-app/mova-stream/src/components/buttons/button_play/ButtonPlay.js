import styles from './ButtonPlay.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const cx = classNames.bind(styles)

function ButtonPlay({ onClick }) {
  return (
    <button className={cx('button-play')} onClick={onClick}>
      <FontAwesomeIcon className={cx('fa-button')} icon={solid('play')} />
      Play
    </button>
  )
}

export default ButtonPlay
