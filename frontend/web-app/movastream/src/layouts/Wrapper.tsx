import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { MovieModal, WrapperPage } from '~/layouts'
import { useModalValue, useMovieValue } from '~/utils/hooks/recoils/useRecoilClientValue'

interface WrapperProps {
  children: React.ReactNode
  singlePage?: boolean | undefined
}

function Wrapper({ singlePage, children }: WrapperProps) {
  const modalState = useModalValue()
  const movieState = useMovieValue()

  useEffect(() => {
    console.log(modalState)
  }, [modalState])

  return (
    <div className='block'>
      <div className='relative before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-page before:-z-[100]'>
        {!singlePage ? <WrapperPage header>{children}</WrapperPage> : children}{' '}
      </div>
      <AnimatePresence>{modalState && <MovieModal movie={movieState} />}</AnimatePresence>
    </div>
  )
}

export default Wrapper
