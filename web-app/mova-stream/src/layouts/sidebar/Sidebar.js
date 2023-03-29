import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import { publicRoutes } from '~/routes'
import HeaderItem from '../header_nav/header_item/HeaderItem'
import { useSideBarState } from '~/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function Sidebar({ expanded, onClick }) {
  var [sideBarState, setSideBarState] = useSideBarState()

  return (
    <div className={cx('wrapper')}>
      <div className={cx('expand-header', expanded ? 'expand-header-active' : 'expand-header-inactive')}>
        <div className={cx('content')}>
          {publicRoutes.map((item, index) => {
            const active = sideBarState.currentIndex === index
            return (
              <HeaderItem
                key={index}
                data={item}
                className={cx('nav-item')}
                onClick={() => {
                  setSideBarState({ currentIndex: index })
                  onClick()
                }}
                isActive={active}
                underlineActive={active}
                underlineHover
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
