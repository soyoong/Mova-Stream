import { useRecoilState } from 'recoil'
import { userMenuRecoils, modalRecoils, sidebarRecoils, appRecoils } from '~/lib/recoil'

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

const useSidebarState = () => {
  const [sidebarState, setSidebarState] = useRecoilState(sidebarRecoils.sidebarState)

  return [sidebarState, setSidebarState]
}

const useSidebarCurrentIndexState = () => {
  const [sidebarCurrentIndexState, setSidebarCurrentIndexState] = useRecoilState(
    sidebarRecoils.sidebarCurrentIndexState
  )

  return [sidebarCurrentIndexState, setSidebarCurrentIndexState]
}

const useAppState = () => {
  const [appState, setAppState] = useRecoilState(appRecoils.appState)

  return [appState, setAppState]
}

export { useUserMenu, useModalProps, useModalState, useSidebarState, useSidebarCurrentIndexState, useAppState }
