import { atom } from 'recoil'
import { Movie } from '~/utils/mockup/model/Model'

const modalState = atom({
  key: 'modalState',
  default: false,
})

export { modalState }
