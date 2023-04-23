import { useRecoilValue } from 'recoil'
import { modalAtom, layoutRecoils, movieAtom } from '~/utils/lib/atoms'

// Movie Value
const useMovieValue = () => {
  const movieValue = useRecoilValue(movieAtom.movieState)

  return movieValue
}

// Modal Value
const useModalValue = () => {
  const modalValue = useRecoilValue(modalAtom.modalState)

  return modalValue
}

const useSearchBarValue = () => {
  const searchBarValue = useRecoilValue(layoutRecoils.searchBarState)

  return searchBarValue
}

export { useMovieValue, useModalValue, useSearchBarValue }
