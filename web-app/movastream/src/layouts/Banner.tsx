import React, { useEffect, useRef, useState } from 'react'
import { Movie } from '~/utils/mockup/model/Model'
import Slider from 'react-slick'
import { useMovieState } from '~/utils/hooks/useRecoilClient'
import { ButtonModal } from '~/components'
import { FaPlay } from 'react-icons/fa'

interface Props {
  data: Movie[]
}

function Banner({ data }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  // const [movieState, setMovieState] = useMovieState()

  const settings = {
    infinite: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 15000,
  }

  return (
    <div className='py-16'>
      <Slider className='w-full h-full absolute top-0 left-0 bottom-0 right-0 z-0 ' {...settings}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className='w-screen h-[95vh] before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-b before:from-gray-900/10 before:to-[#010511]'
            >
              <img
                className='w-full h-full object-cover'
                src={`https://image.tmdb.org/t/p/original/${
                  item?.backdrop_path || item?.poster_path
                }`}
              />
              <div className='absolute -top-[60%] sm:top-[-50%] left-0 bottom-0 flex flex-col items-start justify-center gap-y-2 px-content z-50'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold line-clamp-2 max-w-3xl text-white'>
                  {item.title || item.name}
                </h1>
                <p className='max-w-xs text-sm md:text-lg lg:max-w-2xl lg:text-2xl text-light line-clamp-3 text-shadow-md md:max-w-lg'>
                  {item.overview}
                </p>
                <div className='flex flex-row gap-x-2'>
                  <ButtonModal small icon={FaPlay} title='Play' className='' />
                  <ButtonModal primary icon={FaPlay} title='Play' className='' />
                  <ButtonModal medium icon={FaPlay} title='Play' className='' />
                  <ButtonModal large icon={FaPlay} title='Play' className='' />
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Banner
