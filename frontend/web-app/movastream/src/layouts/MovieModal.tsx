import React, { useState } from 'react'
import ReactPlayer from 'react-player/file'
import { Movie } from '~/utils/mockup/model/Model'
import { ButtonIcon, ButtonLike, ButtonModal } from '~/components'
import { FaPlay } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { HiVolumeOff, HiVolumeUp, HiPlus } from 'react-icons/hi'
import { useSetModalState } from '~/utils/hooks/recoils/useSetRecoilClient'
import Modal from './Modal'

interface Props {
  movie?: Movie | null
}

function MovieModal({ movie }: Props) {
  const setModalState = useSetModalState()
  const [muted, setMuted] = useState(true)

  const toFixed = (n: number, fixed: number) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  return (
    <Modal>
      <div className='w-3/5 h-[95%] overflow-x-hidden overflow-y-scroll m-auto bg-grey rounded'>
        <div className='relative'>
          <div className='w-full h-[32.5rem] bg-slate-600'>
            <ReactPlayer
              url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
              playing
              muted={muted}
              width='100%'
              height='100%'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className='absolute left-0 bottom-0 right-0 flex flex-row items-center justify-between p-5'>
            <div className='flex flex-row gap-x-2 items-center'>
              <ButtonModal medium icon={FaPlay} title='Play' className='bg-white text-black' />
              <ButtonIcon
                buttonStyle={'outline'}
                medium
                bordered
                tooltip='Add to My list'
                icon={HiPlus}
                className='bg-dark p-1 rounded-full text-white'
              />
              <ButtonLike />
            </div>
            <ButtonIcon
              medium
              className='text-white'
              icon={muted ? HiVolumeOff : HiVolumeUp}
              onClick={() => setMuted(!muted)}
            />
          </div>
        </div>
        <ButtonIcon
          medium
          icon={IoClose}
          className='absolute top-0 right-0 text-white m-2'
          onClick={() => setModalState(false)}
        />
        <div className=''>
          <div className=''>
            <ul className=''>
              <li className=''>{toFixed((movie?.vote_average || 0) * 10, 2)}% Match</li>
              <li className=''>{movie?.release_date}</li>
              <li className=''>{movie?.media_type}</li>
            </ul>
          </div>
          <div className=''>
            <p>{movie?.overview}</p>
            <p>{movie?.overview}</p>
            <p>{movie?.overview}</p>
            <p>{movie?.overview}</p>
            <p>{movie?.overview}</p>
            <p>{movie?.overview}</p>
            <p>{movie?.overview}</p>
            <p>{movie?.overview}</p>
            <p>{movie?.overview}</p>
            <p>{movie?.overview}</p>
            <div className=''>
              <ul className=''>
                <li className=''>
                  Genres: <span>{movie?.genre_ids.map((genres) => genres).join(', ')}</span>
                </li>
                <li className=''>
                  Original Language: <span>{movie?.original_language}</span>
                </li>
                <li className=''>
                  Total votes: <span>{movie?.vote_count}</span>
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
