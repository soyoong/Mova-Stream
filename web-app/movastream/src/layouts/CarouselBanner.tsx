import React, { useEffect, useRef, useState } from 'react'
import { Movie } from '~/utils/mockup/model/Model'
import { Slider } from '~/utils/lib/react-slick'
import { useMovieState } from '~/utils/hooks/useRecoilClient'

interface Props {
  data: Movie[]
}

function CarouselBanner({ data }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  // const [movieState, setMovieState] = useMovieState()
  const initialSeconds = 15
  const [randomNumber, setRandomNumber] = useState(0)
  const [seconds, setSeconds] = useState(initialSeconds)

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  useEffect(() => {
    setMovie(data[randomNumber])
  }, [data, randomNumber])

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        setSeconds(initialSeconds)
        setRandomNumber(random())
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  const random = () => {
    return data.length > 0 ? Number.parseInt(Math.floor(Math.random() * data.length).toFixed(0)) : 0
  }

  return (
    <div className='relative w-full h-[100vh] overflow-hidden'>
      <Slider
        className='w-screen h-full before:content-["999"] before:absolute before:bottom-0 before:left-0 before:right-0 before:bg-gradient-to-b before:from-gray-900/10 before:to-[#141414] before:lg:h-[140vh] before:z-10'
        {...settings}
      >
        <div className=''>
          <img
            className='w-full h-full object-fill'
            src={`https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path || movie?.poster_path
            }`}
          />
        </div>
      </Slider>
      <div className='absolute left-0 bottom-[50%] flex flex-col items-start gap-y-2 px-[var(--padding-container)] z-30'>
        <h1 className='text-2xl font-bold line-clamp-2 max-w-2xl md:text-4xl lg:text-7xl text-[#fff]'>
          {movie?.title}
        </h1>
        <p className='max-w-xs text-xs text-[var(--grey-light)] line-clamp-3 text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
          {movie?.overview}
        </p>
      </div>
    </div>
  )
}

export default CarouselBanner
