import { atom } from 'recoil'

const modalState = atom({
  key: 'modalState',
  default: false,
})

const modalProps = atom({
  key: 'modalProps',
  default: {
    videoAlready: false,
    urlVideo: '',
    voteAverage: 0,
    releaseDate: '',
    firstAirDate: '',
    videoQuality: '',
    title: '',
    originalTitle: '',
    popularity: 0,
    overview: '',
    genres: [],
    originalLanguage: '',
    voteCount: 0,
  },
})

export { modalState, modalProps }
