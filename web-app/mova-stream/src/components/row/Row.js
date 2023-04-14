import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from './Row.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import { ButtonIcon, RowItem } from '~/components'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const cx = classNames.bind(styles)

function Row({ title, data }) {
  const rowRef = useRef(null)
  const slideCount = useRef(0)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    slideCount.current = (rowRef.current.scrollWidth / window.innerWidth).toFixed(0)
  }, [])

  useEffect(() => {
    if (index > slideCount.current) {
      setIndex(0)
    }
    if (index < 0) {
      setIndex(0)
    }
  }, [index])

  const handleClick = direction => {
    if (direction === 'prev') {
      setIndex(index - 1)
    } else {
      const decimal = getDecimalPart((rowRef.current.scrollWidth / window.innerWidth).toFixed(3))
      if (index === slideCount.current - 1 && decimal > 0) {
        setIndex(index + decimal / 1000)
      } else {
        setIndex(index + 1)
      }
    }
  }

  function getDecimalPart(num) {
    if (Number.isInteger(num)) {
      return 0
    }

    const decimalStr = num.toString().split('.')[1]
    return Number(decimalStr)
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('row')}>
        <h1>{title}</h1>
        <div className={cx('row__container')}>
          <div ref={rowRef} className={cx('row__inner')}>
            <motion.div
              animate={{
                x: `${index * -100}%`,
              }}
              transition={{ type: 'spring', damping: 15, stiffness: 100 }}
              className={cx('row__list')}
            >
              {data.map((item, i) => {
                return (
                  <RowItem
                    style={{
                      paddingLeft: i === 0 ? 'var(--layout-horizontal-padding)' : 0,
                    }}
                    className={cx('row__item')}
                    key={i}
                    item={item}
                    index={i}
                    onClick={() => console.log(i)}
                  />
                )
              })}
            </motion.div>
          </div>
          <div className={cx('button__control')}>
            <ButtonIcon
              opacity={index === 0 ? 0 : 1}
              disabled={index === 0}
              className={cx('button__prev')}
              icon={solid('caret-left')}
              onClick={() => handleClick('prev')}
            />
            <ButtonIcon
              opacity={index === slideCount.current ? 0 : 1}
              className={cx('button__next')}
              icon={solid('caret-right')}
              onClick={() => handleClick('next')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Row
