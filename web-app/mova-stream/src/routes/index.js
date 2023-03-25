import { Home, Movies, TVShows, Cinemas, News, MyList, Favorites } from '~/pages'

const publicRoutes = [
  {
    name: 'Home',
    path: '/',
    page: Home,
  },
  {
    name: 'Movies',
    path: '/movies',
    page: Movies,
  },
  {
    name: 'TV Shows',
    path: '/tvshows',
    page: TVShows,
  },
  {
    name: 'Cinema Movies',
    path: '/cinemas',
    page: Cinemas,
  },
  {
    name: 'New Movies',
    path: '/news',
    page: News,
  },
  {
    name: 'My List',
    path: '/mylist',
    page: MyList,
  },
  {
    name: 'Favorites',
    path: '/favorites',
    page: Favorites,
  },
]

export { publicRoutes }
