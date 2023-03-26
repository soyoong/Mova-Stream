import styles from './UserDropMenu.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { ButtonImage } from '~/components'

const cx = classNames.bind(styles)

function UserDropMenu({ onClick, index }) {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    setShowMenu(index === 0)
  }, [index])

  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('button-wrapper', {
          active: showMenu,
        })}
      >
        <ButtonImage
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/117100276_2654196668230424_8985351350698507025_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Imo-WgXoUMcAX91SWQK&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDezGvJ0WXdb0CMrDAsq7ycuSh8F9XjPGFI6HOLBRxlKg&oe=643FEE5B"
          onClick={() => {
            setShowMenu(!showMenu)
            onClick()
          }}
        />
      </div>

      {showMenu ? (
        <div className={cx('menu-wrapper')}>
          <div className={cx('bg')} onClick={() => setShowMenu(false)}></div>
          <div className={cx('menu-container')}>
            <ul>
              <li>
                <a href="/">New Pen 1</a>
              </li>
              <li>
                <a href="/">New Pen 2</a>
              </li>
              <li className={cx('line-space')}></li>
              <li>
                <a href="/">New Pen 3</a>
              </li>
              <li className={cx('line-space')}></li>
              <li>
                <a href="/">New Pen 4</a>
              </li>
              <li>
                <a href="/">New Pen 5</a>
              </li>
              <li>
                <a href="/">New Pen 1</a>
              </li>
              <li>
                <a href="/">New Pen 2</a>
              </li>
              <li className={cx('line-space')}></li>
              <li>
                <a href="/">New Pen 3</a>
              </li>
              <li className={cx('line-space')}></li>
              <li>
                <a href="/">New Pen 4</a>
              </li>
              <li>
                <a href="/">New Pen 5</a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default UserDropMenu
