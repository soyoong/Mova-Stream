import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import { publicRoutes } from '~/routes'
import HeaderItem from '../header_nav/header_item/HeaderItem'
import { ButtonIcon } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useSidebarCurrentIndexState } from '~/hooks/useRecoilClient'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)
  var [sidebarCurrentIndexState, setSidebarCurrentIndexState] = useSidebarCurrentIndexState()

  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('sidebar-icon-wrapper', {
          active: showSidebar,
        })}
      >
        <ButtonIcon
          className={cx('fa-button')}
          icon={showSidebar ? solid('xmark') : solid('bars')}
          onClick={() => {
            setShowSidebar(!showSidebar)
          }}
        />
      </div>
      {/* {showSidebar && (
        <div className={cx('search-bar-wrapper')}>
          <div className={cx('bg')} onClick={() => setShowSidebar(false)}></div>
          <div className={cx('search-bar-container')}>
            <div className={cx('search-input-container')}>
              <input type="text" placeholder="Search..." spellCheck={false} />
              <div className={cx('search-button')}>
                <ButtonIcon className={cx('fa-button')} icon={solid('magnifying-glass')} />
              </div>
            </div>
            <div className={cx('drop-list-container')}>
              <div className={cx('drop-list')}>
                {publicRoutes.map((item, index) => {
                  return (
                    <HeaderItem
                      key={index}
                      data={item}
                      isActive={sidebarCurrentIndexState === index}
                      onClick={() => setSidebarCurrentIndexState(index)}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default Sidebar
