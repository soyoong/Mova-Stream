import { atom } from 'recoil'
import { Movie } from '~/utils/mockup/model/Model'

const movieState = atom<Movie | null>({
  key: 'movieState',
  default: null,
})

export { movieState }
