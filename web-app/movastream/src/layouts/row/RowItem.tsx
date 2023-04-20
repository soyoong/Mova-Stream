import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Movie } from '~/utils/mockup/model/Model'
import { motion, AnimatePresence } from 'framer-motion'
import ReactPlayer from 'react-player/file'

interface RowItemProps {
  movie: Movie
  hoverState?: boolean | null
  className?: string | null
}

function RowItem({ movie, hoverState, className }: RowItemProps) {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  return (
    <div className={classNames('cursor-pointer w-[240px] h-[140px] snap-start', ...[className])}>
      <motion.div
        onHoverStart={() => {
          hoverState = true
        }}
        onHoverEnd={() => {
          hoverState = false
        }}
        whileHover={{
          scale: 1.5,
          transition: {
            delay: 0.7,
          },
          zIndex: 10,
        }}
        className='w-full h-full aspect-video'
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          alt={movie.name || movie.original_name}
          className='w-full h-full rounded-sm aspect-video object-cover'
        />
      </motion.div>
    </div>
  )
}

export default RowItem
