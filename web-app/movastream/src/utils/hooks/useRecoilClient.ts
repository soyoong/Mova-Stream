import { useRecoilState } from 'recoil'
import { modalRecoils, layoutRecoils, movieAtom } from '~/utils/lib/atoms'

// Movie state
const useMovieState = () => {
  const [movieState, setMovieState] = useRecoilState(movieAtom.movieState)

  return [movieState, setMovieState]
}

// Modal state
const useModalState = () => {
  const [modalProps, setModalProps] = useRecoilState(modalRecoils.modalState)

  return [modalProps, setModalProps]
}

const useSearchBarState = () => {
  const [searchBarState, setSearchBarState] = useRecoilState(layoutRecoils.searchBarState)

  return [searchBarState, setSearchBarState]
}

const useSideBarState = () => {
  const [sideBarState, setSideBarState] = useRecoilState(layoutRecoils.sideBarState)

  return [sideBarState, setSideBarState]
}

export { useMovieState, useModalState, useSearchBarState, useSideBarState }
