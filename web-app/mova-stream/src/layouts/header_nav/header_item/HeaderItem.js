import styles from './HeaderItem.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function HeaderItem({ data, isActive, onClick }) {
  return (
    <Link to={data.path} className={cx(isActive ? 'active-item' : 'menu-item')} onClick={onClick}>
      {data.name}
    </Link>
  )
}

export default HeaderItem
