'use client'
import { Button } from '@components/ui/Button'
import cn from '@lib/cn'
import { pageRoutes } from '@utils/routes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { TbBellFilled } from 'react-icons/tb'
import { BiSearch } from 'react-icons/bi'
import { DropDown } from '@components/ui'

function NavBarHeader() {
  const indexPage = useRef(-1)
  const [scrolled, setScrolled] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (show) {
      inputRef.current?.focus()
    }
  }, [show])

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
      className={cn(
        'fixed left-0 right-0 top-0 z-[999] h-auto w-full items-center duration-300 ease-in-out',
        {
          'bg-[rgba(20,20,20,0.75)] backdrop-blur-md transition-all duration-300 ease-in-out':
            scrolled,
        },
      )}
    >
      <div className='flex w-full justify-between px-10'>
        <div className='flex h-[70px] w-full flex-row items-center justify-between gap-x-5'>
          <div className='flex gap-x-5'>
            <div className='w-fil flex-shrink-0'>
              <Link className='block' href={'/'}>
                <Image src='./mova.svg' width={32} height={32} alt='logo' />
              </Link>
            </div>
            <div
              className={cn('flex items-center justify-around gap-x-2', {
                'hidden md:flex': show,
              })}
            >
              {pageRoutes.map((route, index) => {
                return (
                  <Link
                    className={cn('relative line-clamp-2 flex text-center', {
                      'underlineIn font-semibold text-primary-red': indexPage.current === index,
                      'text-grey-light hover:text-primary-red hover:transition-all':
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
          <div className='flex items-center gap-x-4'>
            <div className='relative flex flex-row items-center'>
              <input
                ref={inputRef}
                type='text'
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
                placeholder='Search..'
                className={cn(
                  'absolute right-0 h-10 rounded-full border-grey-light bg-grey-dark p-4 text-white placeholder-grey-light outline-none transition-all',
                  {
                    'z-10 w-[calc(0.5*100vw)] md:w-[calc(0.4*100vw)] lg:w-[calc(0.3*100vw)]': show,
                    '-z-10 w-0 opacity-0': !show,
                  },
                )}
              />
              <Button className='text-white' onClick={() => setShow(!show)}>
                <BiSearch className='icon-primary' />
              </Button>
            </div>
            <Button className='text-white'>
              <TbBellFilled className='icon-primary' />
            </Button>
            <div className='relative'>
              <Button>
                <div className='icon-md flex-shrink-0'>
                  <img
                    className='h-full w-full rounded-md object-contain'
                    src='https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.6435-9/117100276_2654196668230424_8985351350698507025_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kYCy60cL0vsAX-LZuV0&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCLl2uoP-WDE8New0s0zlK7mX4sn29IfE5B48TuXCzeig&oe=6469ADDB'
                    alt='avatar-image'
                  />
                </div>
              </Button>
              <DropDown>
                <div>hello</div>
              </DropDown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarHeader
