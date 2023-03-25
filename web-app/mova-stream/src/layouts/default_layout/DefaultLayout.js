import 'animate.css'
import styles from './DefaultLayout.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { HeaderNav, FooterNav, Sidebar } from '~/layouts'
import { useRecoilValue } from 'recoil'
import { modal, sidebarState } from '~/lib/recoil'
import { MovieModal } from '~/layouts/components'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  const showModal = useRecoilValue(modal.modalState)
  const showSideBar = useRecoilValue(sidebarState)

  useEffect(() => {
    document.body.style.overflow = showSideBar ? 'hidden' : 'visible'
  }, [showSideBar])

  return (
    <div className={`${cx('wrapper')}`}>
      <HeaderNav />
      {showSideBar && <Sidebar />}
      <div className={`${cx('page-container')}`}>{children}</div>
      <FooterNav />
      {showModal && <MovieModal />}
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
