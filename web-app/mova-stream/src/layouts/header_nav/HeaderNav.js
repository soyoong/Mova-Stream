import { useEffect, useRef, useState } from 'react'
import styles from './HeaderNav.module.scss'
import { Link } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import classNames from 'classnames/bind'
import images from '~/assets/images'
import { ButtonIcon } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import UserDropDownMenu from './user_dropdown_menu/UserDropDownMenu'
import HeaderItem from './header_item/HeaderItem'
import { useSetRecoilState } from 'recoil'
import { sidebarState } from '~/lib/recoil'

const cx = classNames.bind(styles)

function HeaderNav() {
  const [indexSelected, setIndexSelected] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const setShowSideBar = useSetRecoilState(sidebarState)

  return (
    <nav
      className={cx('wrapper', {
        'bg-blur': scrolled,
      })}
    >
      <div className={cx('left-side')}>
        <div className={cx('sidebar-icon')}>
          <ButtonIcon onClick={() => setShowSideBar(true)} className={cx('fa-button')} icon={solid('bars')} large />
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
      <div className={cx('search-bar')}>
        <input ref={inputRef} className={cx('search-input')} type="text" placeholder="Search..." spellCheck={false} />
        <ButtonIcon className={cx('search-btn')} icon={solid('magnifying-glass')} />
      </div>
      <div className={cx('right-side')}>
        <ButtonIcon icon={solid('bell')} />
        <UserDropDownMenu />
      </div>
    </nav>
  )
}

export default HeaderNav
