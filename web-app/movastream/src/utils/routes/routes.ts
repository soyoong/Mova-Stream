import { Cinemas, Favorites, Home, Movies, MyList, News, TVShows } from '~/pages'

const pageRoutes = [
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

const appRoutes = [
  {
    name: 'Quản lý tài khoản',
    path: '/user-accounts',
  },
  {
    name: 'Cài đặt',
    path: '/settings',
  },
]

export { pageRoutes, appRoutes }
