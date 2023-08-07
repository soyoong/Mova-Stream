'use client'
import React, { Suspense, lazy, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Movie } from '~/utils/typings'
import { ButtonIcon } from '~/components/ui'
import { type } from 'os'
import { cn } from '~/utils/lib'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'

const RowItem = lazy(() => import('./RowItem'))

export interface RowProps {
  sectionTitle?: string
  movies: Movie[]
}

function Row({ sectionTitle, movies }: RowProps) {
  const carousel = useRef<HTMLDivElement>(null)
  const [activeButton, setActiveButton] = useState(false)

  const handleScrollClick = (dir: string) => {
    if (carousel.current) {
      const { scrollLeft, clientWidth } = carousel.current

      const scrollTo = dir === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      carousel.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const isDisabled = (dir: string) => {
    return dir === 'left' ? (carousel.current?.scrollLeft || 0) <= 0 : false
  }

  return (
    <div className='flex flex-col gap-x-2 gap-y-5'>
      <h2 className='relative pl-item text-xl font-semibold text-white'>{sectionTitle}</h2>
      <div className='relative'>
        <motion.div
          ref={carousel}
          onHoverStart={() => {
            setActiveButton(true)
          }}
          onHoverEnd={() => {
            setActiveButton(false)
          }}
          className='z-0 flex w-full touch-pan-x snap-x snap-mandatory flex-row gap-x-3 overflow-y-hidden overflow-x-scroll scroll-smooth scrollbar-hide'
        >
          {movies.map((movie, index) => {
            return (
              <Suspense
                key={index}
                fallback={<Skeleton baseColor='#8F8F8F' width={176} height={128} />}
              >
                <RowItem
                  movie={movie}
                  className={cn({
                    'ml-item': index === 0,
                  })}
                />
              </Suspense>
            )
          })}

          <div
            className={cn(
              'absolute bottom-0 left-0 top-0 flex items-center opacity-0 transition-all duration-300',
              {
                'opacity-100 transition-all duration-300': activeButton,
              },
            )}
          >
            <ButtonIcon
              variant={'transparent'}
              className='m-0 p-0'
              onClick={() => handleScrollClick('left')}
            >
              <FaChevronLeft className='h-7 w-7' />
            </ButtonIcon>
          </div>
          <div
            onClick={() => handleScrollClick('right')}
            className={cn(
              'absolute bottom-0 right-0 top-0 flex items-center opacity-0 transition-all duration-300',
              {
                'opacity-100 transition-all duration-300': activeButton,
              },
            )}
          >
            <ButtonIcon variant={'transparent'} className='m-0 p-0'>
              <FaChevronRight className='h-7 w-7' />
            </ButtonIcon>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Row

// src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}
