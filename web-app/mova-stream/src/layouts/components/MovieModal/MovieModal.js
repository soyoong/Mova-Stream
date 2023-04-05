import React, { useState } from 'react'
import styles from './MovieModal.module.scss'
import { ButtonIcon, ButtonIconWrapper, ButtonPlay, Modal } from '~/components'
import classNames from 'classnames/bind'
import ReactPlayer from 'react-player/lazy'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useModalState, useModalProps } from '~/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function MovieModal() {
  const [muted, setMuted] = useState(true)
  const [modalState, setModalState] = useModalState()
  const [modalProps, setModalProps] = useModalProps()

  const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  return (
    <Modal>
      <div className={cx('content-wrapper')}>
        <div className={cx('video-container')}>
          <ReactPlayer url={modalProps.urlVideo} playing muted={muted} width="100%" height="100%" />
          <div className={cx('action-buttons')}>
            <div className={cx('left__side')}>
              <ButtonPlay medium onClick={() => console.log('Play')} />
              <ButtonIcon medium icon={solid('plus')} textHover="123" bordered />
              {/* <ButtonLike medium /> */}
            </div>
            <div className={cx('right-side-buttons')}>
              <ButtonIcon
                icon={muted ? solid('volume-xmark') : solid('volume-high')}
                onClick={() => setMuted(!muted)}
              />
            </div>
          </div>
        </div>
        <div className={cx('close-btn')}>
          <ButtonIcon className={cx('fa-button')} icon={solid('xmark')} onClick={() => setModalState(false)} />
        </div>
        <div className={cx('overview-container')}>
          <div className={cx('break-0')}>
            <ul className={cx('break-0-content')}>
              <li className={cx('vote-average')}>{toFixed(modalProps.voteAverage * 10, 2)}% Match</li>
              <li className={cx('release-date')}>{modalProps.releaseDate}</li>
              <li className={cx('video-quality')}>{modalProps.videoQuality}</li>
            </ul>
          </div>
          <div className={cx('break-1')}>
            <div className={cx('break-1-0')}>
              <p>{modalProps.overview}</p>
            </div>
            <div className={cx('break-1-1')}>
              <div className={cx('genres')}>
                <span>Genres: </span>
                {modalProps.genres.map(genres => genres).join(', ')}
              </div>
              <div className={cx('language-original')}>
                <span>Original language: </span>
                {modalProps.originalLanguage}
              </div>
              <div className={cx('vote-count')}>
                <span>Total votes: </span>
                {modalProps.voteCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default MovieModal
