import LoginPage from "~/pages/login"
import MoviesPage from "~/pages/movies"
import MyListPage from "~/pages/mylist"
import RegisterPage from "~/pages/register"
import SettingPage from "~/pages/setting"
import TVShowsPage from "~/pages/tvshows"

const pageRoutes = [
  {
    name: 'Movies',
    path: '/movies',
    page: MoviesPage,
    singlePage: false,
  },
  {
    name: 'TV Shows',
    path: '/tvshows',
    page: TVShowsPage,
    singlePage: false,
  },
  {
    name: 'My List',
    path: '/mylist',
    page: MyListPage,
    singlePage: false,
  },
]

const routes = {
  publicRoutes: [
    ...pageRoutes,
    {
      name: 'Login',
      path: '/login',
      page: LoginPage,
      singlePage: true,
    },
    {
      name: 'Register',
      path: '/register',
      page: RegisterPage,
      singlePage: true,
    },
    { name: 'setting', path: '/setting', page: SettingPage, singlePage: true },
  ],
  privateRoutes: [],
}

export { routes, pageRoutes }
