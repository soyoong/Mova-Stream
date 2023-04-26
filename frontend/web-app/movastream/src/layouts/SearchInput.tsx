import React, { useEffect, useRef, useState } from 'react'
import ButtonIcon from '../components/ButtonIcon'
import { BiSearch } from 'react-icons/bi'
import classNames from 'classnames'
import { motion } from 'framer-motion'

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [show, setShow] = useState(false)
  const [valute, setValue] = useState('')

  useEffect(() => {
    if (show) {
      inputRef.current?.focus()
    }
  }, [show])

  return (
    <div className='relative flex flex-row items-center'>
      <input
        ref={inputRef}
        type='text'
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        placeholder='Search..'
        className={classNames(
          'absolute right-0 bg-dark outline-none caret-light border-[1.5px] border-light focus:border-white p-4 placeholder-light text-white rounded-full h-10 transition-all',
          {
            'z-10 w-[calc(0.25*100vw)]': show,
            'w-0 opacity-0 -z-10': !show,
          },
        )}
      />
      <ButtonIcon medium className='text-white' icon={BiSearch} onClick={() => setShow(!show)} />
    </div>
  )
}

export default SearchInput
