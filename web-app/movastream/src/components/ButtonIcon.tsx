import classNames from 'classnames'
import React, { HTMLAttributes, MouseEventHandler, useEffect, useState } from 'react'
import { IconType } from 'react-icons'
import { AnimatePresence, motion } from 'framer-motion'

enum ButtonStyle {
  normal,
  outline,
  outlineTooltip,
}

type ButtonStyleString = keyof typeof ButtonStyle

interface Props {
  icon?: IconType | undefined
  buttonStyle?: ButtonStyleString | undefined
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
  tabIndex?: number | undefined
}

function ButtonIcon({
  icon,
  buttonStyle,
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
  tabIndex,
}: Props) {
  const [hovered, setHovered] = useState(false)
  const Icon = icon as IconType
  const style = ButtonStyle[buttonStyle || 'normal']
  const size = {
    'w-small h-small': small,
    'w-primary h-primary': primary,
    'w-medium h-medium': medium,
    'w-large h-large': large,
  }

  const paddingStyle = small ? 'p-3' : primary ? 'p-4' : medium ? 'p-5' : large ? 'p-6' : ''

  const borderStyle = bordered === true ? 'border-2 border-light hover:border-white' : bordered

  useEffect(() => {
    console.log('')
  }, [])

  const createStyle = (style: ButtonStyle) => {
    if (style === ButtonStyle.normal) {
      return paddingStyle
    } else if (style === ButtonStyle.outline) {
      return paddingStyle
    } else {
      return paddingStyle
    }
  }

  return (
    <motion.button
      tabIndex={tabIndex}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className={classNames(
        'relative flex items-center justify-center',
        createStyle(style),
        size,
        borderStyle,
        ...[className],
      )}
      onClick={onClick}
    >
      <AnimatePresence>
        {tooltip && hovered && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0,
              },
            }}
            exit={{
              opacity: 0,
            }}
            className={classNames(
              'absolute w-full top-0 flex items-center justify-center',
              'after:content-[""] after:absolute after:rotate-45 after:bg-white',
              {
                'after:bottom-[9px] after:w-[13px] after:h-[13px]': small,
                'after:bottom-[10px] after:w-[14px] after:h-[14px]': primary,
                'after:bottom-[11px] after:w-[15px] after:h-[15px]': medium,
                'after:bottom-[12px] after:w-[16px] after:h-[16px]': large,
              },
            )}
          >
            <span
              className={classNames(
                'absolute w-max text-black font-medium line-clamp-1 bg-white rounded z-10',
                {
                  'bottom-[10px] text-[12px] p-[1px] px-[5px]': small,
                  'bottom-[11px] text-[13px] p-[2px] px-[6px]': primary,
                  'bottom-[12px] text-[15px] p-[3px] px-[7px]': medium,
                  'bottom-[13px] text-base p-[4px] px-[8px]': large,
                },
              )}
            >
              {tooltip}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {children ? (
        children
      ) : (
        <Icon
          color={color}
          title={title}
          className={classNames('flex shrink-0', size, ...[className])}
        />
      )}
    </motion.button>
  )
}

export default ButtonIcon
