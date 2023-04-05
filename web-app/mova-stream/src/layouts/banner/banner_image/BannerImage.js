import { useEffect, useRef, useState } from 'react'
import styles from './BannerImage.module.scss'
import classNames from 'classnames/bind'
import { useModalProps } from '~/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function BannerImage({ listData }) {
  const [modalProps, setModalProps] = useModalProps()
  const [list, setList] = useState([])
  const [item, setItem] = useState({})
  var currentIndex = useRef(0)
  const initialSeconds = 2
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    if (listData) {
      setList(listData)
    }
  }, [])

  useEffect(() => {
    if (list.length > 0) {
      setItem(list[currentIndex.current])
    }
  }, [list.length, currentIndex.current])

  useEffect(() => {
    setModalProps({
      videoAlready: item.video,
      urlVideo: 'https://youtu.be/wxN1T1uxQ2g',
      voteAverage: item.vote_average,
      releaseDate: item.release_date,
      firstAirDate: item.release_date,
      videoQuality: '4K',
      title: item.title,
      originalTitle: item.original_title,
      popularity: item.popularity,
      overview: item.overview,
      genres: item.genre_ids,
      originalLanguage: item.original_language,
      voteCount: item.vote_count,
    })
  }, [item])

  const handleSlider = i => {
    if (i > 0) {
      if (currentIndex.current >= list.length - 1) {
        currentIndex.current = 0
      } else {
        currentIndex.current += i
      }
    } else {
      if (currentIndex.current === 0) {
        currentIndex.current = list.length - 1
      } else {
        currentIndex.current += i
      }
    }
    setSeconds(initialSeconds)
  }

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (currentIndex.current < list.length - 1) {
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

  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper__container')}>
        <img src={item.backdrop_path} alt="banner" />
      </div>
    </div>
  )
}

export default BannerImage
