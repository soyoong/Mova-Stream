import Cinemas from '@pages/Cinemas'
import Favorites from '@pages/Favorites'
import HomePage from '@pages/HomePage'
import Login from '@pages/Login'
import Movies from '@pages/Movies'
import MyList from '@pages/MyList'
import News from '@pages/News'
import Register from '@pages/Register'
import Setting from '@pages/Setting'
import TVShows from '@pages/TVShows'

const pageRoutes = [
  {
    name: 'Movies',
    path: '/movies',
    page: Movies,
    singlePage: false,
  },
  {
    name: 'TV Shows',
    path: '/tvshows',
    page: TVShows,
    singlePage: false,
  },
  {
    name: 'My List',
    path: '/mylist',
    page: MyList,
    singlePage: false,
  },
]

const routes = {
  publicRoutes: [
    ...pageRoutes,
    {
      name: 'Login',
      path: '/login',
      page: Login,
      singlePage: true,
    },
    {
      name: 'Register',
      path: '/register',
      page: Register,
      singlePage: true,
    },
    { name: 'setting', path: '/setting', page: Setting, singlePage: true },
  ],
  privateRoutes: [],
}

export { routes, pageRoutes }
