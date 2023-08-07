import { create } from 'zustand'
import { Movie } from '~/utils/typings';

type ModalState = { isShow: boolean; movie: Movie | null; setModal: (movie: Movie) => void }
type ProgressState = { isShow: boolean; message: string }

const useModalState = create<ModalState>((set) => ({
  isShow: false,
  movie: null,
  setModal: (newMovie: Movie) => set(() => ({ movie: newMovie, isShow: true })),
}))

export { useModalState }
