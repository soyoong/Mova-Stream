import 'animate.css'
import styles from './DefaultLayout.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { HeaderNav, FooterNav, Sidebar } from '~/layouts'
import { MovieModal } from '~/layouts/components'
import { useModalState } from '~/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  const [modalState, setModalState] = useModalState()

  return (
    <div className={`${cx('wrapper')}`}>
      <HeaderNav />
      <div className={`${cx('page-container')}`}>{children}</div>
      <FooterNav />
      {modalState && <MovieModal />}
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
