import { useEffect, useRef, useState } from 'react'
import styles from './HeaderNav.module.scss'
import { Link } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import classNames from 'classnames/bind'
import images from '~/assets/images'
import { ButtonIcon } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import HeaderItem from './header_item/HeaderItem'
import { useSidebarState } from '~/hooks/useRecoilClient'
import SearchBar from './searchbar/SearchBar'
import UserDropMenu from './searchbar/user_drop_menu/UserDropMenu'

const cx = classNames.bind(styles)

function HeaderNav() {
  const [indexSelected, setIndexSelected] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [indexIcon, setIdexIcon] = useState(undefined)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const [sidebarState, setSidebarState] = useSidebarState()

  return (
    <nav
      className={cx('wrapper', {
        'bg-blur': scrolled,
      })}
    >
      <div className={cx('left-side')}>
        <div className={cx('sidebar-icon')}>
          <ButtonIcon onClick={() => setSidebarState(true)} className={cx('fa-button')} icon={solid('bars')} />
        </div>
        <div className={cx('logo-container')}>
          <Link to={publicRoutes[0].path}>
            <img src={images.logo} alt="logo" />
          </Link>
        </div>
        <div className={cx('menu-container')}>
          {publicRoutes.map((item, index) => {
            return (
              <HeaderItem
                key={index}
                data={item}
                isActive={indexSelected === index}
                onClick={() => setIndexSelected(index)}
              />
            )
          })}
        </div>
      </div>
      <div className={cx('right-side')}>
        <SearchBar index={indexIcon} onClick={() => setIdexIcon(2)} />
        <ButtonIcon onClick={() => setIdexIcon(1)} icon={solid('bell')} />
        <UserDropMenu index={indexIcon} onClick={() => setIdexIcon(0)} />
      </div>
    </nav>
  )
}

export default HeaderNav
