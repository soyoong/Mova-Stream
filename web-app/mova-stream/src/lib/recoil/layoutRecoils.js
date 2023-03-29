import { atom } from 'recoil'

/*
Listen for user events when impacting ui
*/

const searchBarState = atom({
  key: 'searchBarState',
  default: {
    searchBarActive: false,
    searchText: '',
  },
})

const sideBarState = atom({
  key: 'sideBarState',
  default: {
    currentIndex: 0,
  },
})

export { searchBarState, sideBarState }
