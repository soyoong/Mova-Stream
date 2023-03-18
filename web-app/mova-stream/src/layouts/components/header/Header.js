import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import classNames from 'classnames/bind'
import images from '~/assets/images'
import config from '~/config/routes'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function Header() {
  const [indexSelected, setIndexSelected] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleSelected = index => {
    setIndexSelected(index)
  }

  useEffect(() => {
    console.log(indexSelected)
  }, [indexSelected])

  return (
    <div
      className={cx('wrapper', {
        'bg-blur': scrolled,
      })}
    >
      <div className={cx('left-side')}>
        <div className={cx('logo-container')}>
          <Link to={config.home}>
            <img src={images.logo} alt="logo" />
          </Link>
        </div>
        <div className={cx('menu-container')}>
          <ul className={cx('menu')}>
            {publicRoutes.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={cx(indexSelected === index ? 'active-item' : 'menu-item')}
                  onClick={() => handleSelected(index)}
                >
                  <li>{item.name}</li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
      <div className={cx('right-side')}>Right side</div>
    </div>
  )
}

export default Header
