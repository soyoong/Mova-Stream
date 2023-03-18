import styles from './DefaultLayout.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { Header, Footer } from '~/layouts/components'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        {/* Sidebar */}
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
