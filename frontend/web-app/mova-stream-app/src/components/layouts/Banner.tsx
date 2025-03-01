/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import { Movie } from '@utils/typings'
import { FaPlay } from 'react-icons/fa'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Image from 'next/image'
import { Button } from '@components/ui/Button'
import { useModalState } from '@hooks/useUI'

interface Props {
  movies: Movie[]
}

function Banner({ movies }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const modalState = useModalState()

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)])
  }, [movies])

  useEffect(() => {
    console.log('first', modalState.isShow)
  }, [modalState.isShow])

  return (
    <div className='flex flex-col space-y-2 py-16 md:py-14 lg:h-[65vh] lg:justify-end lg:pb-14'>
      <div className='absolute left-0 right-0 top-0 -z-10 h-[95vh] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-gradient-banner before:content-[""]'>
        <img
          className='h-full w-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`}
          alt='banner'
        />
      </div>
      <div className='px-10'>
        <h1 className='line-clamp-2 max-w-[50vw] text-2xl font-bold md:text-4xl lg:text-7xl'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className='text-shadow-md line-clamp-3 max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
          {movie?.overview}
        </p>

        <div className='mt-2 flex flex-row space-x-3'>
          <button className='button bannerButton bg-white text-black'>
            <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' /> Play
          </button>
          <button
            className='button bannerButton bg-grey-light text-white'
            onClick={() => modalState.setModal(movie!)}
          >
            More Info <BsFillInfoCircleFill className='h-4 w-4 md:h-7 md:w-7' />{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
