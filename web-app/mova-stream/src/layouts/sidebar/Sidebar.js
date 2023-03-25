import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { publicRoutes } from '~/routes'
import HeaderItem from '../header_nav/header_item/HeaderItem'
import { useRecoilState } from 'recoil'
import { sidebarState } from '~/lib/recoil'
import { ButtonIcon } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
import images from '~/assets/images'

const cx = classNames.bind(styles)

function Sidebar() {
  const [showSidebar, setShowSidebar] = useRecoilState(sidebarState)
  const [indexSelected, setIndexSelected] = useState(0)

  return (
    <div className={`${showSidebar ? 'bounceInLeft' : 'bounceOutLeft'} ${cx('wrapper')}`}>
      <div className={cx('close-button')}>
        <ButtonIcon large icon={solid('xmark')} onClick={() => setShowSidebar(false)} />
      </div>
      <div className={cx('sidebar-container')}>
        <div className={cx('logo-container')}>
          <Link to={publicRoutes[0].path}>
            <img src={images.logo} alt="logo" />
          </Link>
        </div>
        <div className={`${cx('set-open')}`}>
          {publicRoutes.map((item, index) => {
            return (
              <HeaderItem
                key={index}
                data={item}
                isActive={indexSelected === index}
                onClick={() => {
                  setIndexSelected(index)
                  setShowSidebar(false)
                }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
