import { atom } from 'recoil'

const sidebarState = atom({
  key: 'sidebarState',
  default: false,
})

const sidebarCurrentIndexState = atom({
  key: 'sidebarCurrentIndexState',
  default: 0,
})

export { sidebarState, sidebarCurrentIndexState }
