import { atom } from 'recoil'

/*

*/

const appState = atom({
  key: 'appState',
  default: {
    scrollbarHidden: false,
    currentIndexPageSelected: 0,
  },
})

export { appState }
