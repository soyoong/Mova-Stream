import styles from './Row.module.scss'
import classNames from 'classnames/bind'
import { RowItem } from '~/components'

const cx = classNames.bind(styles)

function Row({ title, data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('row')}>
        <div className={cx('title__container')}>
          <h1>{title}</h1>
        </div>
        <div className={`scrollbar-hidden ${cx('row__container')}`}>
          {data.map((item, i) => {
            return <RowItem key={i} item={item} onClick={() => console.log(data)} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Row
