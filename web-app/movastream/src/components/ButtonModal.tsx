import React, { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import classNames from 'classnames'

interface Props {
  icon?: IconType | undefined
  small?: boolean | undefined
  primary?: boolean | undefined
  medium?: boolean | undefined
  large?: boolean | undefined
  color?: string
  title?: string
  dir?: string
  className?: string | undefined
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function ButtonModal({
  icon,
  small,
  primary,
  medium,
  large,
  color,
  title,
  dir,
  className,
  onClick,
}: Props) {
  const size = {
    'w-4 h-4': small,
    'w-5 h-5': primary,
    'w-6 h-6': medium,
    'w-7 h-7': large,
  }
  const Icon = icon as IconType

  return (
    <motion.button
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className={classNames(
        ' w-fit h-fit bg-white outline-none text-black rounded font-semibold',
        {
          'py-[10px] px-[20px] text-base': small,
          'py-[12px] px-[24px] text-lg': primary,
          'py-[14px] px-[28px] text-xl': medium,
          'py-[16px] px-[32px] text-2xl': large,
        },
        ...[className],
      )}
    >
      {dir === 'title-icon' ? (
        <div className='w-fit h-fit flex flex-row items-center gap-x-2'>
          {title}
          <Icon color={color} title={title} className={classNames(size, ...[className])} />
        </div>
      ) : (
        <div className='w-fit h-fit flex flex-row items-center gap-x-2'>
          <Icon color={color} title={title} className={classNames(size, ...[className])} />
          {title}
        </div>
      )}
    </motion.button>
  )
}

export default ButtonModal
