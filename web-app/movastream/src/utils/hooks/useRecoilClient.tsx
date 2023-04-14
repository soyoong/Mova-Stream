import { useRecoilState } from 'recoil'
import { userMenuRecoils, modalRecoils, appRecoils, layoutRecoils } from '~/utils/lib/recoils'

const useUserMenu = () => {
  const [userMenuState, setUserMenuState] = useRecoilState(userMenuRecoils.userMenuState)

  return [userMenuState, setUserMenuState]
}

const useModalProps = () => {
  const [modalProps, setModalProps] = useRecoilState(modalRecoils.modalProps)

  return [modalProps, setModalProps]
}

const useModalState = () => {
  const [modalProps, setModalProps] = useRecoilState(modalRecoils.modalState)

  return [modalProps, setModalProps]
}

const useAppState = () => {
  const [appState, setAppState] = useRecoilState(appRecoils.appState)

  return [appState, setAppState]
}

const useSearchBarState = () => {
  const [searchBarState, setSearchBarState] = useRecoilState(layoutRecoils.searchBarState)

  return [searchBarState, setSearchBarState]
}

const useSideBarState = () => {
  const [sideBarState, setSideBarState] = useRecoilState(layoutRecoils.sideBarState)

  return [sideBarState, setSideBarState]
}

export {
  useUserMenu,
  useModalProps,
  useModalState,
  useAppState,
  useSearchBarState,
  useSideBarState,
}
