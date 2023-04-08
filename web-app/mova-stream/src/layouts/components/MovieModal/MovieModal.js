import React, { useState } from 'react'
import styles from './MovieModal.module.scss'
import { ButtonIcon, ButtonLike, ButtonPlay, Modal } from '~/components'
import classNames from 'classnames/bind'
import ReactPlayer from 'react-player/lazy'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useModalState, useModalProps } from '~/utils/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function MovieModal() {
  const [muted, setMuted] = useState(false)
  const [modalState, setModalState] = useModalState()
  const [modalProps, setModalProps] = useModalProps()

  const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  return (
    <Modal>
      <div className={cx('wrapper')}>
        <div className={cx('video-container')}>
          <ReactPlayer url={modalProps.urlVideo} playing muted={muted} width="100%" height="100%" />
          <div className={cx('action__buttons')}>
            <div className={cx('left__side')}>
              <ButtonPlay medium onClick={() => console.log('Play')} />
              <ButtonIcon primary backgroundColor bordered grounded icon={solid('plus')} textHover="123" />
              <ButtonLike primary backgroundColor bordered grounded />
            </div>
            <div className={cx('right__side')}>
              <ButtonIcon
                primary
                backgroundColor
                hoverColor
                grounded
                icon={muted ? solid('volume-xmark') : solid('volume-high')}
                onClick={() => setMuted(!muted)}
              />
            </div>
          </div>
        </div>
        <ButtonIcon
          primary
          icon={solid('xmark')}
          className={cx('button__close')}
          backgroundColor
          hoverColor
          grounded
          onClick={() => setModalState(false)}
        />
        <div className={cx('overview-container')}>
          <div className={cx('break-0')}>
            <ul className={cx('list__0')}>
              <li className={cx('vote-average')}>{toFixed(modalProps.voteAverage * 10, 2)}% Match</li>
              <li className={cx('release-date')}>{modalProps.releaseDate}</li>
              <li className={cx('video-quality')}>{modalProps.videoQuality}</li>
            </ul>
          </div>
          <div className={cx('break-1')}>
            <p>{modalProps.overview}</p>
            <div className={cx('break-1-1')}>
              <ul className={cx('list__1')}>
                <li className={cx('genres')}>
                  Genres: <span>{modalProps.genres.map(genres => genres).join(', ')}</span>
                </li>
                <li className={cx('language')}>
                  Original Language: <span>{modalProps.originalLanguage}</span>
                </li>
                <li className={cx('vote')}>
                  Total votes: <span>{modalProps.voteCount}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default MovieModal
