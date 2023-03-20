import styles from './DefaultLayout.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { HeaderNav, FooterNav } from '~/layouts'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <HeaderNav />
      <div className={cx('container')}>
        {/* Sidebar */}
        <div className={cx('content')}>{children}</div>
      </div>
      <FooterNav />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
