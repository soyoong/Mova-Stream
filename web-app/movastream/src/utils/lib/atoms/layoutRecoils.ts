import { atom } from 'recoil'

const searchBarState = atom({
  key: 'searchBarState',
  default: {
    searchBarActive: false,
    searchText: '',
  },
})

export { searchBarState }
