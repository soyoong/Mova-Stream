import styles from './ButtonPlay.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const cx = classNames.bind(styles)

function ButtonPlay({ small, primary, medium, large, className, onClick }) {
  return (
    <div
      className={cx('wrapper', {
        [className]: className,
        small: small,
        primary: primary,
        medium: medium,
        large: large,
      })}
    >
      <button onClick={onClick}>
        <FontAwesomeIcon className={cx('fa__icon')} icon={solid('play')} />
        Play
      </button>
    </div>
  )
}

export default ButtonPlay
