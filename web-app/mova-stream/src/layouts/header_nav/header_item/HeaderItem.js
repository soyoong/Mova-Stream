import styles from './HeaderItem.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function HeaderItem({ data, onClick, isActive, underlineActive, underlineHover }) {
  return (
    <div className={cx('wrapper')}>
      <button
        className={cx('link-button', {
          'underline-active': underlineActive,
          'underline-hover': underlineHover,
        })}
      >
        <Link
          to={data.path}
          className={cx('link', {
            'link-active': isActive,
          })}
          onClick={onClick}
        >
          {data.name}
        </Link>
      </button>
    </div>
  )
}

export default HeaderItem
