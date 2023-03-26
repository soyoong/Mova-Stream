import classNames from 'classnames/bind'
import styles from './SearchBarItem.module.scss'

const cx = classNames.bind(styles)

function SearchBarItem({ avatar, title, subTitle }) {
  return (
    <div className={cx('wrapper')}>
      <img src={avatar} alt="img" />
      <div className={cx('title-container')}>
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
      </div>
    </div>
  )
}

export default SearchBarItem
