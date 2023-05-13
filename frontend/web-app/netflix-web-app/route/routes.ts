import {
    Cinemas,
    Favorites,
    Home,
    Movies,
    MyList,
    News,
    TVShows,
    Setting,
    Login,
    Register,
} from '~/pages'

const pageRoutes = [
    {
        name: 'Home',
        path: '/',
        page: Home,
        singlePage: false,
    },
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
        name: 'Cinema Movies',
        path: '/cinemas',
        page: Cinemas,
        singlePage: false,
    },
    {
        name: 'New Movies',
        path: '/news',
        page: News,
        singlePage: false,
    },
    {
        name: 'My List',
        path: '/mylist',
        page: MyList,
        singlePage: false,
    },
    {
        name: 'Favorites',
        path: '/favorites',
        page: Favorites,
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
