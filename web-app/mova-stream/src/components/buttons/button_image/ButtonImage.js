import styles from './ButtonImage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function ButtonImage({ src, onClick, bordered, underline, underlineActive, underlineHover }) {
  return (
    <div
      className={cx('wrapper', {
        underline: underline,
        'underline-hover': underlineHover,
        'underline-active': underlineActive,
      })}
    >
      <button>
        <img src={src} alt="user-icon" onClick={onClick} />
      </button>
    </div>
  )
}

export default ButtonImage
