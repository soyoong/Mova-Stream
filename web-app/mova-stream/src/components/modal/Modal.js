import styles from './Modal.module.scss'
import classNames from 'classnames/bind'
import { useModalState } from '~/utils/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function Modal({ children }) {
  const [modalState, setModalState] = useModalState()

  window.onkeyup = function (e) {
    if (e.keyCode === 27) {
      setModalState(false)
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('bg-container')} onClick={() => setModalState(false)}></div>
      <div className={cx('container')}>{children}</div>
    </div>
  )
}

export default Modal
