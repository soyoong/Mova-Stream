import { atom } from 'recoil'

const modalState = atom({
  key: 'modalState',
  default: false,
})

const modalProps = atom({
  key: 'modalProps',
  default: {
    urlVideo: '',
    voteAverage: 0,
    releaseDate: '',
    firstAirDate: '',
    videoQuality: '',
    overview: '',
    genres: [],
    originalLanguage: '',
    voteCount: 0,
  },
})

export { modalState, modalProps }
