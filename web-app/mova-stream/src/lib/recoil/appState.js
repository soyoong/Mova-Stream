import { atom } from 'recoil'

const appState = atom({
  key: 'appState',
  default: {
    scrollbarHidden: false,
  },
})

export default appState
