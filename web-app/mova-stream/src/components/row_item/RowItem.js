import styles from './RowItem.module.scss'
import classNames from 'classnames/bind'
import { ButtonLike, ButtonAdd, ButtonPlayMini } from '~/components'

const cx = classNames.bind(styles)

function RowItem({ item, onClick }) {
  const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  return (
    <div className={cx('wrapper')}>
      <div className={cx('card')} onClick={onClick}>
        <div className={cx('card__thumb')}>{/* <img src={item.backdrop_path} alt="" /> */}</div>

        <div className={cx('card__full')}>
          {/* <ButtonPlayMini onClick={() => console.log('Cliked')} />
          <ButtonAdd onClick={() => console.log('Cliked')} />
          <ButtonLike onClick={() => console.log('Cliked')} /> */}
        </div>
      </div>
    </div>
  )
}

export default RowItem
