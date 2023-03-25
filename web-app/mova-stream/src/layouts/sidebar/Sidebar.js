import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import { publicRoutes } from '~/routes'
import HeaderItem from '../header_nav/header_item/HeaderItem'
import { ButtonIcon } from '~/components'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'
import images from '~/assets/images'
import { useSidebarState } from '~/hooks/useRecoilClient'

const cx = classNames.bind(styles)

function Sidebar() {
  const [sidebarState, setSidebarState] = useSidebarState()
  // var [useAppState, setUseAppState] = useRecoilState(appState)

  // useEffect(() => {
  //   console.log(useAppState.currentIndexPageSelected)
  // }, [useAppState.currentIndexPageSelected])

  return (
    <div className={`${sidebarState ? 'bounceInLeft' : 'bounceOutLeft'} ${cx('wrapper')}`}>
      <div className={cx('close-button')}>
        <ButtonIcon icon={solid('xmark')} onClick={() => setSidebarState(false)} />
      </div>
      <div className={cx('bg')} onClick={() => setSidebarState(false)}></div>
      <div className={cx('sidebar-container')}>
        <div className={cx('logo-container')}>
          <Link to={publicRoutes[0].path}>
            <img src={images.logo} alt="logo" />
          </Link>
        </div>
        <div className={`${cx('set-open')}`}>
          {publicRoutes.map((item, index) => {
            return (
              <HeaderItem
                key={index}
                data={item}
                // isActive={useAppState.currentIndexPageSelected === index}
                // onClick={() => {
                //   setUseAppState(index)
                //   setShowSidebar(false)
                // }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
