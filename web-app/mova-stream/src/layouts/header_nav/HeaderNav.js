import { useEffect, useRef, useState } from 'react'
import styles from './HeaderNav.module.scss'
import { Link } from 'react-router-dom'
import { pageRoutes } from '~/routes'
import classNames from 'classnames/bind'
import images from '~/assets/images'
import { ButtonIcon } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import HeaderItem from './header_item/HeaderItem'
import SearchBar from './searchbar/SearchBar'
import PopBarUser from './popbar_user/PopBarUser'
import Sidebar from '../sidebar/Sidebar'

const cx = classNames.bind(styles)

function HeaderNav() {
  const [indexSelected, setIndexSelected] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [indexIcon, setIdexIcon] = useState(undefined)
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div
      className={cx('wrapper', 'bg-linear', {
        'bg-page': scrolled,
      })}
    >
      <div className={cx('container')}>
        <div className={cx('left-side')}>
          <div className={cx('logo-container')}>
            <Link to={pageRoutes[0].path}>
              <img src={images.logo} alt="logo" />
            </Link>
          </div>
          <div className={cx('sidebar-icon')}>
            <ButtonIcon
              icon={showSidebar ? solid('xmark') : solid('bars')}
              primary
              onClick={() => setShowSidebar(!showSidebar)}
              underlineActive={showSidebar}
              underlineHover
            />
          </div>
          <div className={cx('menu-container')}>
            {pageRoutes.map((item, index) => {
              const active = indexSelected === index
              return (
                <HeaderItem
                  key={index}
                  data={item}
                  isActive={active}
                  onClick={() => setIndexSelected(index)}
                  underlineHover
                  underlineActive={active}
                />
              )
            })}
          </div>
        </div>
        <div className={cx('right-side')}>
          <SearchBar className={cx('searchbar')} index={indexIcon} onClick={() => setIdexIcon(2)} />
          <ButtonIcon primary icon={solid('bell')} onClick={() => setIdexIcon(1)} />
          <PopBarUser index={indexIcon} onClick={() => setIdexIcon(0)} />
        </div>
      </div>
      <Sidebar expanded={showSidebar} onClick={() => setShowSidebar(!showSidebar)} />
    </div>
  )
}

export default HeaderNav
