import styles from './Row.module.scss'
import classNames from 'classnames/bind'
import { RowItem } from '~/components'

const cx = classNames.bind(styles)

function Row({ title, data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('row')}>
        <h1>{title}</h1>
        <div className={`scrollbar-hidden ${cx('row__container')}`}>
          {data.map((item, i) => {
            return (
              <div key={i} className={cx('item__wrapper')}>
                <RowItem item={item} onClick={() => {}} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Row
