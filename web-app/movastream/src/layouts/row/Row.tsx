import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Movie } from '~/utils/mockup/model/Model'
import RowItem from './RowItem'
import { ButtonIcon } from '~/components/buttons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface Props {
  data: Movie[]
}

function Row({ data }: Props) {
  const carousel = useRef<HTMLDivElement>(null)
  const maxCount = useRef(0)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    maxCount.current = Number(((carousel.current?.scrollWidth || 0) / window.innerWidth).toFixed(0))
  }, [])

  useEffect(() => {
    if (index > maxCount.current) {
      setIndex(0)
    }
    if (index < 0) {
      setIndex(0)
    }
  }, [index])

  const handleClick = (dir: string) => {
    if (dir === 'left') {
      setIndex(index - 1)
    } else {
      const decimal = getDecimalPart(
        ((carousel.current?.scrollWidth || 0) / window.innerWidth).toFixed(3),
      )
      if (index === maxCount.current - 1 && decimal > 0) {
        setIndex(index + decimal / 1000)
      } else {
        setIndex(index + 1)
      }
    }
  }

  const isDisabled = (dir: string) => {
    return false
  }

  function getDecimalPart(num: string) {
    if (Number.isInteger(num)) {
      return 0
    }

    const decimalStr = num.toString().split('.')[1]
    return Number(decimalStr)
  }

  return (
    <div className='flex-1 flex flex-col w-screen gap-y-2 mx-auto'>
      <h2 className='text-xl font-semibold text-white ml-[var(--padding-container)]'>
        Our epic carousel
      </h2>
      <div className='relative'>
        <motion.div
          ref={carousel}
          animate={{
            x: `${index * -100}%`,
          }}
          className='flex flex-row gap-x-2 pl-[var(--padding-container)] scrollbar-hide scroll-smooth snap-x snap-mandatory touch-pan-x z-0'
        >
          {data.map((movie, index) => {
            return <RowItem key={index} movie={movie} />
          })}
        </motion.div>
        <div className='flex justify-between w-full h-full'>
          <div
            className={classNames(
              'absolute top-0 left-0 bottom-0 w-10 h-full flex flex-1 items-center justify-center bg-gradient-to-r from-[var(--grey-dark)] to-transparent z-0',
              {
                hidden: isDisabled('prev'),
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
                hidden: isDisabled('next'),
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
