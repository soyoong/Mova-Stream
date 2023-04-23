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

  const gapX = {
    'gap-x-1': small,
    'gap-x-2': primary || medium || large,
  }

  const Icon = icon as IconType

  return (
    <motion.button
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className={classNames(
        ' w-fit h-fit outline-none rounded font-semibold',
        {
          'py-[0px] px-[8px] text-base': small,
          'py-[4px] px-[18px] text-lg': primary,
          'py-[8px] px-[22px] text-xl': medium,
          'py-[12px] px-[26px] text-2xl': large,
        },
        ...[className],
      )}
      onClick={onClick}
    >
      {dir === 'title-icon' ? (
        <div className={classNames('w-fit h-fit flex flex-row items-center', gapX)}>
          {title}
          <Icon color={color} title={title} className={classNames(size, ...[className])} />
        </div>
      ) : (
        <div className={classNames('w-fit h-fit flex flex-row items-center gap-x-1', gapX)}>
          <Icon color={color} title={title} className={classNames(size, ...[className])} />
          {title}
        </div>
      )}
    </motion.button>
  )
}

export default ButtonModal
