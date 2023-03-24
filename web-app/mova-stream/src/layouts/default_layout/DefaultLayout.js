import 'animate.css'
import styles from './DefaultLayout.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { HeaderNav, FooterNav } from '~/layouts'
import { useRecoilValue } from 'recoil'
import { modal } from '~/lib/recoil'
import { MovieModal } from '~/layouts/components'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  const showModal = useRecoilValue(modal.modalState)

  return (
    <div className={cx('wrapper')}>
      <HeaderNav />
      <div className={cx('container')}>
        {/* Sidebar */}
        <div className={cx('page-container')}>{children}</div>
      </div>
      <FooterNav />
      {showModal && <MovieModal />}
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
