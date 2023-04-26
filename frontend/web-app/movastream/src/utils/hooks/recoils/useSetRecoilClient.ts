import { useSetRecoilState } from 'recoil'
import { modalAtom, layoutRecoils, movieAtom } from '~/utils/lib/atoms'

// Movie state
const useSetMovieState = () => {
  const setMovieState = useSetRecoilState(movieAtom.movieState)

  return setMovieState
}

// Modal state
const useSetModalState = () => {
  const setModalState = useSetRecoilState(modalAtom.modalState)

  return setModalState
}

const useSetSearchBarState = () => {
  const setSearchBarState = useSetRecoilState(layoutRecoils.searchBarState)

  return setSearchBarState
}

export { useSetMovieState, useSetModalState, useSetSearchBarState }
