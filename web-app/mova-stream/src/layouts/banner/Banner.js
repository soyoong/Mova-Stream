import styles from './Banner.module.scss'
import classNames from 'classnames/bind'
import { ButtonPlay, ButtonInfo, ButtonIcon } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div className={cx('overview-content')}>
          <div className={cx('title')}>
            <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
          </div>
          <div className={cx('sub-title')}>
            <p>{movie?.overview}</p>
          </div>
          <div className={cx('action-buttons')}>
            <button className={cx('button-play')}>
              <FontAwesomeIcon className={cx('fa-button')} icon={solid('play')} />
              Play
            </button>
            <button className={cx('button-info')}>
              More Info
              <FontAwesomeIcon className={cx('fa-button')} icon={solid('circle-info')} />
            </button>
          </div>
        </div>
        {/* Controller */}
        <div className={cx('slider-buttons')}>
          <button>
            <FontAwesomeIcon className={cx('button-prev')} icon={solid('chevron-left')} />
          </button>
          <button>
            <FontAwesomeIcon className={cx('button-next')} icon={solid('chevron-right')} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
