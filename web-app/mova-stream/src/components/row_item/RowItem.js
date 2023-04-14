import { light, regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from './RowItem.module.scss'
import classNames from 'classnames/bind'
import { ButtonLike, ButtonAdd, ButtonPlayMini, ButtonIcon } from '~/components'
import ReactPlayer from 'react-player/youtube'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { hover } from '@testing-library/user-event/dist/hover'
import { useModalProps, useModalState } from '~/utils/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function RowItem({ item, index, className, style, onClick }) {
  const [modalState, setModalState] = useModalState()
  const [modalProps, setModalProps] = useModalProps()
  const [hoverState, setHoverState] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  useEffect(() => {
    if (hoverState) {
      const timeout = setTimeout(() => {
        setPlaying(true)
      }, 500)
      return () => clearTimeout(timeout)
    } else {
      setPlaying(false)
    }
  }, [hoverState])

  const handleExpandedModal = () => {
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
    setModalState(true)
    setPlaying(false)
    setHoverState(false)
  }

  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
      style={{ ...style }}
    >
      <motion.div
        onHoverStart={() => setHoverState(true)}
        onHoverEnd={() => setHoverState(false)}
        whileHover={{
          cursor: 'pointer',
          scale: 1.5,
          translateY: '-25%',
          translateX: index === 0 ? '15%' : 0,
        }}
        animate={{}}
        className={`${cx('card')}`}
        onClick={onClick}
      >
        <div className={cx('card__header')}>
          <AnimatePresence>
            {playing ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.5,
                  },
                }}
                exit={{
                  opacity: 0,
                }}
                className={cx('video__container')}
              >
                <ReactPlayer
                  className={cx('video__player')}
                  url={item.trailerUrl}
                  playing={hoverState}
                  muted={muted}
                  width="100%"
                  height="100%"
                />
                <ButtonIcon
                  className={cx('mute__button')}
                  small
                  backgroundColor
                  hoverColor
                  grounded
                  icon={muted ? solid('volume-xmark') : solid('volume-high')}
                  onClick={() => setMuted(!muted)}
                />
              </motion.div>
            ) : (
              <div className={cx('card__thumb')}>
                <img src={item.backdrop_path} alt="" />
              </div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {playing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className={cx('card__footer')}
            >
              <div className={cx('overview__container')}>
                <div className={cx('action__buttons')}>
                  <div className={cx('button__left')}>
                    <ButtonIcon small icon={solid('play')} color="black" backgroundColor="white" grounded />
                    <ButtonIcon
                      small
                      icon={solid('add')}
                      color="white"
                      backgroundColor
                      bordered
                      grounded
                      textHover="Thêm vào danh sáchh của bạn"
                    />
                    <ButtonLike small bordered grounded backgroundColor />
                  </div>
                  <div className={cx('button__right')}>
                    <ButtonIcon
                      small
                      icon={solid('caret-down')}
                      color="white"
                      bordered
                      grounded
                      backgroundColor
                      onClick={handleExpandedModal}
                      textHover="Mở rộng"
                    />
                  </div>
                </div>
                <div className={cx('break__0')}>
                  <ul>
                    <li className={cx('vote__average')}>Match: {toFixed(item.vote_average * 10, 2)}%</li>
                    <li className={cx('sexual__genres')}>16+</li>
                    <li className={cx('video__timer')}>1h 38m</li>
                    <li className={cx('video__quality')}>hd</li>
                  </ul>
                </div>
                <div className={cx('break__1')}>
                  <ul>
                    <li>Khiếm nhã</li>
                    <li>-</li>
                    <li>Ngốc nghếch</li>
                    <li>-</li>
                    <li>Phim hài hành động</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default RowItem
