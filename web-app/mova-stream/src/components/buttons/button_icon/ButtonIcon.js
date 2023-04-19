import styles from './ButtonIcon.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

function ButtonIcon({
  icon,
  src,
  small,
  primary,
  medium,
  large,
  rotate,
  color,
  textHover,
  hoverColor,
  bordered,
  grounded,
  borderRadius,
  disabled,
  backgroundColor,
  opacity,
  className,
  onClick,
}) {
  const [onMouseState, setOnMouseState] = useState(false)

  const handleOnMouse = i => {
    if (i === 0) {
      setOnMouseState(true)
    }
    if (i === -1) {
      setOnMouseState(false)
    }
  }

  const renderBackgroundColor = () => {
    // backgroundColor === true ? hoverColor === true && onMouseState === true ? 'rgba(148, 148, 148, 0.5)' : 'rgba(48, 48, 48, 1)' : onMouseState ? hoverColor === true ? 'rgba(148, 148, 148, 0.5)' : hoverColor : backgroundColor
    if (backgroundColor && hoverColor === undefined) {
      if (backgroundColor === true) {
        return 'rgba(48, 48, 48, 1)'
      } else {
        return backgroundColor
      }
    }
    if (backgroundColor === undefined && hoverColor) {
      if (hoverColor === true) {
        return onMouseState ? 'rgba(148, 148, 148, 0.5)' : 'transparent'
      } else {
        return onMouseState ? hoverColor : 'transparent'
      }
    }
    if (backgroundColor && hoverColor) {
      if (backgroundColor === true && hoverColor === true) {
        return onMouseState ? 'rgba(148, 148, 148, 0.5)' : 'rgba(48, 48, 48, 1)'
      } else if (backgroundColor === true && hoverColor) {
        return onMouseState ? hoverColor : 'rgba(48, 48, 48, 1)'
      } else if (backgroundColor && hoverColor === true) {
        return onMouseState ? 'rgba(148, 148, 148, 0.5)' : backgroundColor
      } else {
        return onMouseState ? hoverColor : backgroundColor
      }
    }
  }

  return (
    <div
      className={className('wrapper', {
        [className]: className,
        small: small,
        primary: primary,
        medium: medium,
        large: large,
      })}
      style={{
        opacity: `${opacity}`,
      }}
      disabled={disabled}
    >
      <motion.button
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onMouseOver={() => handleOnMouse(0)}
        onMouseLeave={() => handleOnMouse(-1)}
        onClick={onClick}
        className={className({
          'padding-icon': hoverColor || bordered || backgroundColor,
          bordered: bordered === true,
        })}
        style={{
          rotate: rotate,
          opacity: `${opacity}`,
          border: `${bordered !== true && bordered}`,
          backgroundColor: `${renderBackgroundColor()}`,
          borderRadius: `${
            grounded ? '50px' : borderRadius ? (borderRadius === true ? '0.6rem' : borderRadius) : '0px'
          }`,
        }}
        disabled={disabled}
      >
        {icon && <FontAwesomeIcon className={className('fa__icon')} icon={icon} color={color ? color : 'white'} />}
        {src && (
          <img
            className={className('img__src')}
            src={src}
            alt="icon"
            style={{
              borderRadius: `${
                grounded ? '50px' : borderRadius ? (borderRadius === true ? '0.6rem' : borderRadius) : '0px'
              }`,
            }}
          />
        )}
        <div
          className={className('fake__layer', {
            'text-hover': textHover,
          })}
        >
          {textHover}
        </div>
      </motion.button>
    </div>
  )
}

export default ButtonIcon
