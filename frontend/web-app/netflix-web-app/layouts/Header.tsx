import { useEffect, useRef, useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { TbBellFilled } from 'react-icons/tb'
import { BiSearch } from 'react-icons/bi'
import { pageRoutes } from '~/route/routes'
import classNames from 'classnames'
import { SearchBar } from '~/layouts'
import Link from 'next/link'
import Image from 'next/image'
import cn from '~/lib/cn'

function Header() {
  const indexPage = useRef(0)
  const [scrolled, setScrolled] = useState(false)
  const [expand, setExpand] = useState(false)

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
        'w-100 h-auto fixed top-0 left-0 right-0 flex items-center px-[var(--padding-container)] ease-in-out duration-300 z-[999]',
        {
          'backdrop-blur-md bg-[rgba(20,20,20,0.75)] transition-all ease-in-out duration-300':
            scrolled,
        },
      )}
    >
      <div className='w-full flex flex-row justify-between'>
        <div className='w-full h-auto flex flex-col lg:flex-row justify-start items-start lg:items-center gap-x-item'>
          <div className='w-full lg:w-fit h-[70px] flex flex-row items-center justify-between gap-x-5'>
            <div className='w-fil flex flex-row items-center gap-x-item'>
              <Link className='block' href='/'>
                <Image className='w-24 h-auto' src='/logo' alt='logo' fill />
              </Link>
              {/* <ButtonIcon
                className='lg:hidden'
                icon={IoMdMenu}
                medium
                color='white'
                onClick={() => setExpand(!expand)}
              /> */}
            </div>
            <div className='h-[70px] flex lg:hidden flex-row items-center gap-x-item'>
              <SearchBar />
              {/* <ButtonIcon className='text-white' medium icon={TbBellFilled} /> */}
              <div className='avatar'>
                <div className='w-10 h-10 rounded'>
                  <img
                    src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/117100276_2654196668230424_8985351350698507025_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kYCy60cL0vsAX-LZuV0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCLl2uoP-WDE8New0s0zlK7mX4sn29IfE5B48TuXCzeig&oe=6469ADDB'
                    alt='Tailwind-CSS-Avatar-component'
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={classNames('w-full lg:w-fit h-fit lg:block pb-5 lg:pb-0', {
              hidden: !expand,
            })}
          >
            <div className='flex flex-row items-start justify-around gap-x-item'>
              {pageRoutes.map((route, index) => {
                return (
                  <Link
                    className={cn('relative line-clamp-2 flex text-center', {
                      'text-[var(--primary-red)] font-semibold underlineIn':
                        indexPage.current === index,
                      'text-[var(--grey-light)] hover:text-[var(--primary-red)] hover:transition-all':
                        indexPage.current !== index,
                    })}
                    key={index}
                    href={route.path}
                    onClick={() => {
                      indexPage.current = index
                    }}
                  >
                    {route.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div className='h-[70px] lg:flex hidden flex-row items-center gap-x-item'>
          <SearchBar />
          {/* <ButtonIcon className='text-white' medium icon={TbBellFilled} /> */}
          {/* <ButtonIcon>
            <div className='avatar'>
              <div className='w-10 h-10 rounded'>
                <img
                  src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/117100276_2654196668230424_8985351350698507025_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kYCy60cL0vsAX-LZuV0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCLl2uoP-WDE8New0s0zlK7mX4sn29IfE5B48TuXCzeig&oe=6469ADDB'
                  alt='Tailwind-CSS-Avatar-component'
                />
              </div>
            </div>
          </ButtonIcon> */}
        </div>
      </div>
    </div>
  )
}

export default Header
