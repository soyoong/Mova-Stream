import classNames from 'classnames'
import React, { MouseEventHandler } from 'react'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

interface Props {
  icon: IconType
  small?: boolean | undefined
  primary?: boolean | undefined
  medium?: boolean | undefined
  large?: boolean | undefined
  children?: React.ReactNode
  color?: string
  title?: string
  className?: string | undefined
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function ButtonIcon({
  icon,
  small,
  primary,
  medium,
  large,
  children,
  color,
  title,
  className,
  onClick,
}: Props) {
  const Icon = icon as IconType
  const size = {
    'w-[var(--icon-small)] h-[var(--icon-small)]': small,
    'w-[var(--icon-primary)] h-[var(--icon-primary)]': primary,
    'w-[var(--icon-medium)] h-[var(--icon-medium)]': medium,
    'w-[var(--icon-large)] h-[var(--icon-large)]': large,
  }
  return (
    <motion.button
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className={classNames('flex items-center justify-center', size, ...[className])}
      onClick={onClick}
    >
      <Icon color={color} title={title} className={classNames(size, ...[className])}>
        {children}
      </Icon>
    </motion.button>
  )
}

export default ButtonIcon
