import styles from './ButtonIconWrapper.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonIcon } from '~/components'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import 'src/styles/_variables.scss'

const cx = classNames.bind(styles)

function ButtonIconWrapper({
  icon,
  src,
  small,
  primary,
  medium,
  large,
  textHover,
  color,
  radius,
  bordered,
  opacity,
  onClick,
}) {
  return (
    <div
      className={cx('wrapper', {
        small: small,
        primary: primary,
        medium: medium,
        large: large,
        bordered: bordered,
      })}
    >
      <ButtonIcon
        className={cx('button__icon')}
        icon={icon}
        src={src}
        small={small}
        primary={primary}
        medium={medium}
        large={large}
        color={color}
        radius={radius}
      />
    </div>
  )
}

export default ButtonIconWrapper
