import { useEffect, useRef, useState } from 'react'
import styles from './Banner.module.scss'
import classNames from 'classnames/bind'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import tmdbData from '~/data/tmdb'

const cx = classNames.bind(styles)

function Banner() {
  const [data, setData] = useState(tmdbData.netflixOriginals)
  const [item, setItem] = useState({})
  const initialSeconds = 15
  const [seconds, setSeconds] = useState(initialSeconds)
  var currentIndex = useRef(0)

  useEffect(() => {
    setItem(data[currentIndex.current])
  }, [data, currentIndex.current])

  const handleSlider = i => {
    if (i > 0) {
      if (currentIndex.current >= data.length - 1) {
        currentIndex.current = 0
      } else {
        currentIndex.current += i
      }
    } else {
      if (currentIndex.current === 0) {
        currentIndex.current = data.length - 1
      } else {
        currentIndex.current += i
      }
    }
  }

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (currentIndex.current < data.length - 1) {
          currentIndex.current += 1
        } else {
          currentIndex.current = 0
        }
        setSeconds(initialSeconds)
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('carousel')}>
          <img src={item.backdrop_path} alt="banner" />
          <div className={cx('overlay')}></div>
        </div>
        <div className={cx('overview-content')}>
          <div className={cx('title')}>
            <h1>{item?.title || item?.name || item?.original_name}</h1>
          </div>
          <div className={cx('sub-title')}>
            <p>{item?.overview}</p>
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
          <button onClick={() => handleSlider(-1)}>
            <FontAwesomeIcon className={cx('fa-prev')} icon={solid('chevron-left')} />
          </button>
          <button onClick={() => handleSlider(1)}>
            <FontAwesomeIcon className={cx('fa-next')} icon={solid('chevron-right')} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
