import styles from './ButtonLike.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonIcon from '../button_icon/ButtonIcon'
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const cx = classNames.bind(styles)

function ButtonLike({ onClick }) {
  return (
    <div className={cx('wrapper')}>
      <FontAwesomeIcon className={cx('fa-icon')} icon={regular('thumbs-up')} onClick={onClick} />
    </div>
  )
}

export default ButtonLike
