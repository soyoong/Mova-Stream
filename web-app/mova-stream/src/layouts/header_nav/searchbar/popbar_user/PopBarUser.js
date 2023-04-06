import styles from './PopBarUser.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { ButtonIcon, PopBarWrapper } from '~/components'
import { Link } from 'react-router-dom'
import { userMenuRoutes } from '~/routes'

const cx = classNames.bind(styles)

function PopBarUser({ onClick, index }) {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    setShowMenu(index === 0)
  }, [index])

  const handleDropMenu = (even, behindState) => {
    setShowMenu(behindState)
  }

  return (
    <div className={cx('wrapper')}>
      <ButtonIcon
        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/117100276_2654196668230424_8985351350698507025_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Imo-WgXoUMcAX91SWQK&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDezGvJ0WXdb0CMrDAsq7ycuSh8F9XjPGFI6HOLBRxlKg&oe=643FEE5B"
        onClick={() => {
          setShowMenu(!showMenu)
          onClick()
        }}
        medium
        borderRadius
        underlineActive={showMenu}
        underlineHover
      />

      {showMenu && (
        <PopBarWrapper behindOnClick={handleDropMenu}>
          <div className={`${cx('drop__list__container')}`}>
            <ul>
              {userMenuRoutes.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                )
              })}
              <li className={cx('line-space')}></li>
              <li>
                <Link to="/">Đăng xuất</Link>
              </li>
            </ul>
          </div>
        </PopBarWrapper>
      )}
    </div>
  )
}

export default PopBarUser
