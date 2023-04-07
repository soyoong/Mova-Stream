import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from './RowItem.module.scss'
import classNames from 'classnames/bind'
import { ButtonLike, ButtonAdd, ButtonPlayMini, ButtonIcon } from '~/components'

const cx = classNames.bind(styles)

function RowItem({ item, className, onClick }) {
  const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)

  return (
    <div
      className={cx('wrapper', {
        [className]: className,
      })}
    >
      <div className={cx('card')} onClick={onClick}>
        <div className={cx('card__thumb')}>
          <img src={item.backdrop_path} alt="" />
        </div>

        <div className={cx('card__full')}>
          <div className={cx('action__buttons')}>
            {/* <ButtonIcon small icon={solid('play')} color="black" backgroundColor="white" grounded /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RowItem
