'use client'
import { forwardRef, useState } from 'react'
import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import ReactPlayer from 'react-player/file'
import { Movie } from '~/utils/typings'
import { cn } from '~/utils/lib'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export interface RowItemProps extends React.HTMLAttributes<HTMLDivElement> {
  movie: Movie
}

const RowItem = forwardRef<HTMLDivElement, RowItemProps>(({ movie, className, ...props }, ref) => {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  const handleHoverStart = () => {
    setPlaying(true)
  }

  const hoverHoverEnd = () => {
    setPlaying(false)
  }

  return (
    <div
      ref={ref}
      className={classNames('h-32 w-44 cursor-pointer snap-end md:h-36 md:w-64', ...[className])}
    >
      <div className={cn('z-10 h-32 w-44 md:h-36 md:w-64')}>
        <div
          onMouseOver={handleHoverStart}
          onMouseOut={hoverHoverEnd}
          className={cn(
            'z-10 h-32 w-44 rounded-md shadow-md md:h-36 md:w-64',
            'transition-transform duration-300 ease-in-out hover:absolute hover:z-10 hover:scale-150 hover:transition-transform hover:duration-300 hover:delay-500 hover:ease-in-out',
            'md:hover:h-36 md:hover:w-64',
          )}
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
            alt={movie.name || movie.original_name || 'image'}
            className={cn('aspect-video h-full w-full rounded-md object-cover')}
            width={176}
            height={128}
          />
          <div className={cn('hidden h-36 w-full bg-grey-dark transition-all')}>0</div>
        </div>
      </div>
    </div>
  )
})

RowItem.displayName = 'RowItem'

export default RowItem
