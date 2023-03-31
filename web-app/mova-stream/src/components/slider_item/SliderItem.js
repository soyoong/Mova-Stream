import styles from './SliderItem.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function SliderItem({ imgUrl, videoUrl, matchScore, genres, maturityNumber, duration, quality, onClick }) {
  const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  return (
    <div className={cx('wrapper')}>
      <div className={cx('card')}>
        <div className={cx('card__thumb')}>{/* <img src={imgUrl} alt="Mountain Background" /> */}</div>
        <div className={cx('card__full')}></div>
      </div>
    </div>
  )
}

export default SliderItem
