import React, { Fragment } from 'react'
import { useSetModalState } from '~/utils/hooks/recoils/useSetRecoilClient'
import { motion } from 'framer-motion'

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
      className='fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center z-[999]'
    >
      <div
        className='absolute top-0 left-0 bottom-0 right-0 bg-page-05 -z-10'
        onClick={() => setModalState(false)}
      />
      <div className='w-fit h-fit m-auto border-none outline-none overflow-x-hidden overflow-y-scroll bg-dark rounded drop-shadow-box'>
        {children}
      </div>
    </motion.div>
  )
}

export default Modal
