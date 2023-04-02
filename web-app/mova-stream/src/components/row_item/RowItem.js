import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from './RowItem.module.scss'
import classNames from 'classnames/bind'
import ButtonLike from '../buttons/button_like/ButtonLike'

const cx = classNames.bind(styles)

function RowItem({ item, onClick }) {
  const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  return (
    <div className={cx('wrapper')}>
      <div className={cx('card')} onClick={onClick}>
        <div className={cx('card__thumb')}>
          <img src={item.backdrop_path} alt="" />
        </div>
        <div className={cx('card__overview')}>
          <ButtonLike onClick={() => console.log('Cliked')} />
        </div>
      </div>
    </div>
  )
}

export default RowItem
