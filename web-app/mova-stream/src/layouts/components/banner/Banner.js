import styles from './Banner.module.scss'
import classNames from 'classnames/bind'
import { ButtonPlay, ButtonInfo } from '~/components'

const cx = classNames.bind(styles)

const movie = {
  adult: false,
  backdrop_path: 'https://image.tmdb.org/t/p/original/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg',
  genre_ids: [16, 12, 35, 10751],
  id: 315162,
  original_language: 'en',
  original_title: 'Puss in Boots: The Last Wish',
  overview:
    'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
  popularity: 1972.345,
  poster_path: 'https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
  release_date: '2022-12-07',
  title: 'Puss in Boots: The Last Wish',
  video: false,
  vote_average: 8.4,
  vote_count: 4613,
}

function Banner() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('carousel')}>
          <img src={movie.backdrop_path} alt="" />
        </div>
        <div className={cx('content')}>
          <h1 className={cx('title')}>{movie?.title || movie?.name || movie?.original_name}</h1>
          <p className={cx('sub-title')}>{movie?.overview}</p>
          <div className={cx('action-buttons')}>
            <ButtonPlay />
            <ButtonInfo />
          </div>
          {/* Controller */}
          {/* <div className={cx('controller')}>
          <div className={cx('button-wrapper')}>
            <FontAwesomeIcon className={cx('fa-prev')} icon={solid('chevron-left')} />
          </div>
          <div className={cx('button-wrapper')}>
            <FontAwesomeIcon className={cx('fa-next')} icon={solid('chevron-right')} />
          </div>
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Banner
