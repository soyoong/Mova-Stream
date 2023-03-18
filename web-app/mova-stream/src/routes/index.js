import routes from '~/config/routes'
import { Home, Movies, TVShows, Cinemas, News, MyList, Favorites } from '~/pages'

const publicRoutes = [
  {
    name: 'Home',
    path: routes.home,
    component: Home,
  },
  {
    name: 'Movies',
    path: routes.movies,
    component: Movies,
  },
  {
    name: 'TV Shows',
    path: routes.tvshows,
    component: TVShows,
  },
  {
    name: 'Cinema Movies',
    path: routes.cinemas,
    component: Cinemas,
  },
  {
    name: 'New Movies',
    path: routes.news,
    component: News,
  },
  {
    name: 'My List',
    path: routes.mylist,
    component: MyList,
  },
  {
    name: 'Favorites',
    path: routes.favorites,
    component: Favorites,
  },
]

export { publicRoutes }
