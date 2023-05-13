'use client'

import { useEffect, useState } from 'react'
import { Movie } from '~/typings'
import Image from 'next/legacy/image'
import { baseUrl } from '~/constants/movie'
import { FaPlay } from 'react-icons/fa'
import { AiFillInfoCircle } from 'react-icons/ai'
// import { modalState, movieState } from "../atoms/modalAtom.";
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '~/atoms/modalAtom'
import { Button } from '~/components/Button'

interface Props {
  movies: Movie[]
}

function Banner({ movies }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)])
  }, [movies])

  return <div className='p-10'>banner</div>
}

export default Banner
