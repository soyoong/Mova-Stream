import styles from './Modal.module.scss'
import classNames from 'classnames/bind'
import { useModalState } from '~/utils/hooks/useRecoilClient'
import { motion } from 'framer-motion'

const cx = classNames.bind(styles)

function Modal({ children }) {
  const [modalState, setModalState] = useModalState()

  window.onkeyup = function (e) {
    if (e.keyCode === 27) {
      setModalState(false)
    }
  }

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      exit={{
        scale: 0,
      }}
      className={cx('wrapper')}
    >
      <div className={cx('bg-container')} onClick={() => setModalState(false)}></div>
      <div className={cx('container')}>{children}</div>
    </motion.div>
  )
}

export default Modal
