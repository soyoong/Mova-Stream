import styles from './Row.module.scss'
import classNames from 'classnames/bind'
import tmdbData from '~/data/tmdb'
import { RowItem } from '~/components'

const cx = classNames.bind(styles)

function Row() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('row-container')}>
        <div className={cx('title-wrapper')}>
          <h1>{tmdbData.trendingNow.title}</h1>
        </div>
        <div className={`scrollbar-hidden ${cx('row-list')}`}>
          {tmdbData.trendingNow.list.map((item, index) => {
            return (
              <RowItem
                imgUrl={item.backdrop_path}
                videoUrl="https://youtu.be/wxN1T1uxQ2g"
                matchScore={item.vote_average}
                genres={item.genre_ids}
                maturityNumber="18+"
                duration="1h30p"
                quality="hd"
                onClick={() => console.log('Props')}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Row
