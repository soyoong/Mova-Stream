import { useRecoilState } from 'recoil'
import { modalAtom, layoutRecoils, movieAtom } from '~/utils/lib/atoms'

// Movie state
const useMovieState = () => {
  return useRecoilState(movieAtom.movieState)
}

// Modal state
const useModalState = () => {
  return useRecoilState(modalAtom.modalState)
}

const useSearchBarState = () => {
  return useRecoilState(layoutRecoils.searchBarState)
}

export { useMovieState, useModalState, useSearchBarState }
