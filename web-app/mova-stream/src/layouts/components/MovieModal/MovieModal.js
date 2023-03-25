import React, { useState } from 'react'
import styles from './MovieModal.module.scss'
import { ButtonIcon, ButtonModal, ButtonPlay, Modal } from '~/components'
import classNames from 'classnames/bind'
import ReactPlayer from 'react-player/lazy'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { modal } from '~/lib/recoil'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const cx = classNames.bind(styles)

function MovieModal() {
  const [muted, setMuted] = useState(true)
  const setModalState = useSetRecoilState(modal.modalState)
  const modalProps = useRecoilValue(modal.modalProps)

  const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  return (
    <Modal>
      <div className={cx('content-wrapper')}>
        <div className={cx('video-container')}>
          <ReactPlayer url={modalProps.urlVideo} playing muted={muted} width="100%" height="100%" />
          <div className={cx('action-buttons')}>
            <div className={cx('left-side-buttons')}>
              <ButtonPlay />
              <ButtonModal icon={solid('plus')} background bordered />
              <ButtonModal icon={solid('thumbs-up')} background bordered />
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
          <ButtonModal
            className={cx('fa-button')}
            icon={solid('xmark')}
            background
            onClick={() => setModalState(false)}
          />
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
