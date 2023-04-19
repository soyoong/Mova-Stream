import React, { useEffect, useRef, useState } from 'react'
import logo from '~/assets/imgs/logo-mova.svg'
import { Link } from 'react-router-dom'
import { ButtonIcon } from '~/components/buttons'
import { IoMdMenu } from 'react-icons/io'
import { pageRoutes } from '~/utils/route/routes'
import classNames from 'classnames'

function HeaderNavigation() {
  const [scrolled, setScrolled] = useState(false)
  const [indexPage, setIndexPage] = useState(0)

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
      className={classNames(
        'w-100 h-[70px] fixed top-0 left-0 right-0 flex items-center px-[var(--padding-container)] ease-in-out duration-300 z-[999]',
        {
          'backdrop-blur-md bg-[rgba(20,20,20,0.75)] transition-all ease-in-out duration-300':
            scrolled,
        },
      )}
    >
      <div className='flex items-end gap-x-5'>
        <Link to={'/'}>
          <img className='w-[128px] h-auto object-contain' src={logo} alt='logo' />
        </Link>
        <ButtonIcon className='lg:hidden' icon={IoMdMenu} primary color='white' />
        <div className='flex flex-row gap-x-[var(--padding-element)] sm:hidden lg:flex'>
          {pageRoutes.map((route, index) => {
            const active = indexPage === index
            return (
              <Link
                className={`relative ${
                  active
                    ? 'text-[var(--primary-red)] underlineIn'
                    : 'text-[var(--grey-light)] hover:text-[var(--primary-red)] hover:transition-all'
                }`}
                key={index}
                to={route.path}
                onClick={() => setIndexPage(index)}
              >
                {route.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeaderNavigation
