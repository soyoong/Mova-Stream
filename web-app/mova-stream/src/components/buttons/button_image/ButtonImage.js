import styles from './ButtonImage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function ButtonImage({ src, onClick }) {
  return (
    <div className={cx('wrapper')}>
      <img src={src} alt="user-icon" onClick={onClick} />
    </div>
  )
}

export default ButtonImage
