import styles from './ButtonPlay.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { motion } from 'framer-motion'

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
      <motion.button
        whileHover={{
          opacity: 0.9,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon className={cx('fa__icon')} icon={solid('play')} />
        Play
      </motion.button>
    </div>
  )
}

export default ButtonPlay
