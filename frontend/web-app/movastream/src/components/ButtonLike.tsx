import React, { MouseEventHandler, useEffect, useState } from 'react'
import ButtonIcon from './ButtonIcon'
import { BiLike, BiDislike } from 'react-icons/bi'
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai'
import { IconType } from 'react-icons'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface Props {
  small?: boolean | undefined
  primary?: boolean | undefined
  medium?: boolean | undefined
  large?: boolean | undefined
  children?: React.ReactNode
  color?: string | undefined
  title?: string | undefined
  tooltip?: string | undefined
  bordered?: boolean | undefined
  className?: string | undefined
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function ButtonLike({
  small,
  primary,
  medium,
  large,
  children,
  color,
  title,
  bordered,
  tooltip,
  className,
  onClick,
}: Props) {
  const [hovered, setHovered] = useState(false)
  const [icon, setIcon] = useState<IconType>()

  // useEffect(() => {}, [])

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className='relative flex items-center justify-center'
    >
      <div
        className={classNames(
          'absolute opacity-0 flex flex-row gap-x-1 items-center justify-center p-1 bg-dark rounded-full z-10',
          'w-full h-full transition-all duration-300',
          {
            'w-max h-max opacity-100': hovered,
          },
        )}
      >
        {/* Dislike */}
        <div
          className={classNames(
            'transition-all duration-300',
            {
              'translate-x-full': !hovered,
            },
            {
              'translate-x-0': hovered,
            },
          )}
        >
          <ButtonIcon
            className={classNames('text-white p-1 bg-dark rounded-full')}
            bordered
            medium
            tooltip='Dislike'
            icon={AiOutlineDislike}
          />
        </div>
        {/* Like */}
        <ButtonIcon
          className={classNames('text-white p-1 bg-dark rounded-full')}
          bordered
          medium
          tooltip='Like'
          icon={AiOutlineLike}
        />
        {/* Favorite */}
        <div
          className={classNames(
            'transition-all duration-300 -z-10',
            {
              '-translate-x-full': !hovered,
            },
            {
              'translate-x-0': hovered,
            },
          )}
        >
          <ButtonIcon
            className={classNames('text-white p-1 bg-dark rounded-full')}
            bordered
            medium
            tooltip='Dislike'
            icon={AiOutlineHeart}
          />
        </div>
      </div>
      <ButtonIcon
        className='text-white p-1 bg-dark rounded-full'
        bordered
        medium
        icon={AiOutlineLike}
        onClick={onClick}
      />
    </motion.div>
  )
}

export default ButtonLike
