import React, { useEffect, useState } from 'react'
import tmdbData from '../utils/data/tmdb'
import classNames from 'classnames'

function Home() {
  const [index, setIndex] = useState(0)
  const list = tmdbData.netflixOriginals.list

  const handleItem = i => {
    setIndex(i)
  }

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div
          className={classNames('carousel-item', {
            active: index === 0,
          })}
        >
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original/${list[0].backdrop_path || list[0].poster_path}`}
            alt="First slide"
          />
        </div>
        <div
          className={classNames('carousel-item', {
            active: index === 1,
          })}
        >
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original/${list[1].backdrop_path || list[1].poster_path}`}
            alt="Sec slide"
          />
        </div>
        <div
          className={classNames('carousel-item', {
            active: index === 2,
          })}
        >
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original/${list[2].backdrop_path || list[2].poster_path}`}
            alt="thir slide"
          />
        </div>
        <div
          className={classNames('carousel-item', {
            active: index === 3,
          })}
        >
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original/${list[3].backdrop_path || list[3].poster_path}`}
            alt="thir slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
        onClick={() => {
          setIndex(index === 0 ? 3 : index - 1)
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
        onClick={() => {
          setIndex(index < 3 ? index + 1 : 0)
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Home
