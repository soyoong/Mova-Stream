import { light, regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from './RowItem.module.scss'
import classNames from 'classnames/bind'
import { ButtonLike, ButtonAdd, ButtonPlayMini, ButtonIcon } from '~/components'
import ReactPlayer from 'react-player/youtube'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { hover } from '@testing-library/user-event/dist/hover'
import { useModalProps, useModalState } from '~/utils/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function RowItem({ item, className, onClick }) {
  const [modalState, setModalState] = useModalState()
  const [modalProps, setModalProps] = useModalProps()
  const [hoverState, setHoverState] = useState(false)
  const [muted, setMuted] = useState(false)
  const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  useEffect(() => {
    console.log(hoverState)
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
  }

  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
    >
      <motion.div
        onHoverStart={() => {
          setHoverState(true)
        }}
        onHoverEnd={() => setHoverState(false)}
        whileHover={{
          animationDuration: '500ms',
          scale: 1.5,
          translateY: '-25%',
        }}
        className={cx('card')}
        onClick={onClick}
      >
        <div className={cx('card__header')}>
          {hoverState ? (
            <div className={cx('video__container')}>
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
            </div>
          ) : (
            <div className={cx('card__thumb')}>
              <img src={item.backdrop_path} alt="" />
            </div>
          )}
        </div>

        <div className={cx('card__footer')}>
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
                  icon={solid('angle-right')}
                  rotate={'90deg'}
                  color="white"
                  bordered
                  grounded
                  backgroundColor
                  onClick={handleExpandedModal}
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
        </div>
      </motion.div>
    </div>
  )
}

export default RowItem
