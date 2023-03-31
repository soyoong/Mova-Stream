import styles from './Slider.module.scss'
import classNames from 'classnames/bind'
import tmdbData from '~/data/tmdb'
import SliderItem from '../slider_item/SliderItem'

const cx = classNames.bind(styles)

function Slider() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('slider-container')}>
        <div className={cx('title-wrapper')}>
          <h1>{tmdbData.trendingNow.title}</h1>
        </div>
        <div className={`scrollbar-hidden ${cx('slider-list')}`}>
          {tmdbData.trendingNow.list.map((item, index) => {
            return (
              <SliderItem
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

export default Slider
