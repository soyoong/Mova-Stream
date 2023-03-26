import styles from './UserDropDownMenu.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { ButtonIcon, ButtonImage } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const cx = classNames.bind(styles)

function UserDropDownMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className={cx('wrapper')}>
      <ButtonImage
        src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/117100276_2654196668230424_8985351350698507025_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Imo-WgXoUMcAX91SWQK&_nc_ht=scontent.fhan14-2.fna&oh=00_AfDezGvJ0WXdb0CMrDAsq7ycuSh8F9XjPGFI6HOLBRxlKg&oe=643FEE5B"
        onClick={() => setOpen(!open)}
      />

      <div className={cx('user-menu', open ? 'element-visibility' : 'element-hidden')}>
        <ul className={cx('menu')}>
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
  )
}

export default UserDropDownMenu
