import styles from './FooterNav.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function FooterNav() {
  return <div className={cx('wrapper')}>Footer</div>
}

export default FooterNav
