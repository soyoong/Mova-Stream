import React, { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Movie } from '~/utils/mockup/model/Model'
import RowItem from './RowItem'
import { ButtonIcon } from '~/components/buttons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface Props {
  title?: string | null
  data: Movie[]
}

function Row({ title, data }: Props) {
  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel) {
      console.log(carousel.current?.offsetLeft)
    }
  }, [carousel.current?.offsetLeft])

  const handleClick = (dir: string) => {
    if (carousel.current) {
      const { scrollWidth, scrollLeft, clientWidth, clientLeft } = carousel.current

      const scrollTo = dir === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      carousel.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const isDisabled = (dir: string) => {
    return dir === 'left' ? carousel.current?.offsetLeft || 0 <= 0 : false
  }

  return (
    <div className='flex-1 flex flex-col gap-y-2 w-screen mx-auto'>
      <h2 className='text-xl font-semibold text-white relative pl-content top-10'>{title}</h2>
      <div className='relative'>
        <div
          ref={carousel}
          className='w-full flex flex-row pl-content gap-x-2 py-10 overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory touch-pan-x z-0'
        >
          {data.map((movie, index) => {
            return <RowItem key={index} movie={movie} index={index} limit={data.length - 1} />
          })}
        </div>
        <div className='flex justify-between w-full h-full'>
          <div
            className={classNames(
              'absolute top-0 left-0 bottom-0 w-10 h-full flex flex-1 items-center justify-center bg-gradient-to-r from-[var(--grey-dark)] to-transparent z-0',
              {
                hidden: isDisabled('left'),
              },
            )}
            onClick={() => handleClick('left')}
          >
            <ButtonIcon
              className='text-[rgb(255,255,255,0.75)] hover:text-white transition-all ease-in-out before:content-[""] before:absolute before:w-full before:h-full before:z-0 z-0'
              medium
              icon={FaChevronLeft}
            />
          </div>
          <div
            className={classNames(
              'absolute top-0 right-0 bottom-0 w-10 h-full flex flex-1 items-center justify-center hover:opacity-100 bg-gradient-to-l from-[var(--grey-dark)] to-transparent z-0',
              {
                hidden: isDisabled('right'),
              },
            )}
            onClick={() => handleClick('right')}
          >
            <ButtonIcon
              className='text-[rgb(255,255,255,0.75)] hover:text-white transition-all ease-in-out before:content-[""] before:absolute before:w-full before:h-full before:z-0 z-0'
              medium
              icon={FaChevronRight}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Row

// src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}
