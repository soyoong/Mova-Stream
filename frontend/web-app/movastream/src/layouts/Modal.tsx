import React, { Fragment } from 'react'
import { useSetModalState } from '~/utils/hooks/recoils/useSetRecoilClient'
import { motion } from 'framer-motion'
import classNames from 'classnames'

interface Props {
  children: React.ReactNode
}

function Modal({ children }: Props) {
  const setModalState = useSetModalState()

  window.onkeyup = function (e) {
    if (e.keyCode === 27) {
      setModalState(false)
    }
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
      }}
      exit={{
        scale: 0,
      }}
      className='fixed top-0 left-0 bottom-0 right-0 z-[999]'
    >
      <div
        className='absolute top-0 left-0 bottom-0 right-0 bg-dark-025 -z-10'
        onClick={() => setModalState(false)}
      />
      <div className='w-full h-full flex items-center justify-center '>{children}</div>
    </motion.div>
  )
}

export default Modal
