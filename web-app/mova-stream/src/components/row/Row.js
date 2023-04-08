import styles from './Row.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'
import { RowItem } from '~/components'

const cx = classNames.bind(styles)

function Row({ title, data }) {
  const rowRef = useRef(null)

  useEffect(() => {
    console.log()
  }, [])

  const handleClick = direction => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className={`scrollbar-hidden ${cx('wrapper')}`}>
      <div className={`${cx('row')}`}>
        <h1>{title}</h1>
        <div className={`${cx('row__container')}`}>
          <div className={cx('row__inner')}>
            <div className={cx('row__list')}>
              {data.map((item, i) => {
                return <RowItem className={cx('row__item')} key={i} item={item} onClick={() => console.log(i)} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Row
