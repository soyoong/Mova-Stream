import { atom } from 'recoil'

const userMenuState = atom({
  key: 'userMenuState',
  default: false,
})

export { userMenuState }
