import { icons } from 'assets/index'
import Home from 'pages/home/Home'
import User from 'pages/users/User'
import Genre from 'pages/genres/Genre'
import Cate from 'pages/categories/Cate'
import Cinemas from 'pages/cinemas/Cinemas'
import Recommends from 'pages/recommends/Recommends'
import TopIMDB from 'pages/topimdb/TopIMDB'
import News from 'pages/news/News'
import TopTrending from 'pages/toptrending/TopTrending'
import Favorites from 'pages/favorites/Favorites'
import ListMovies from 'pages/listmovies/ListMovies'

// SIDEBAR CONFIGURATION
export const sidebarData = [
  {
    id: 0,
    title: 'Home',
    iconOutLine: icons.home,
    iconFill: icons.homeFill,
    path: '/',
    component: Home
  },
  {
    id: 1,
    title: 'List users',
    iconOutLine: icons.listUser,
    iconFill: icons.listUserFill,
    path: '/list-users',
    component: User
  },
  {
    id: 2,
    title: 'Genres',
    iconOutLine: icons.genre,
    iconFill: icons.genreFill,
    path: '/genres',
    component: Genre
  },
  {
    id: 3,
    title: 'Categories',
    iconOutLine: icons.cateMovie,
    iconFill: icons.cateMovieFill,
    path: '/categories',
    component: Cate
  },
  {
    id: 4,
    title: 'Cinemas',
    iconOutLine: icons.cinema,
    iconFill: icons.cinemaFill,
    path: '/cinemas',
    component: Cinemas
  },
  {
    id: 5,
    title: 'Recommend',
    iconOutLine: icons.recommend,
    iconFill: icons.recommendFill,
    path: '/recommends',
    component: Recommends
  },
  {
    id: 6,
    title: 'Top IMDB',
    iconOutLine: icons.topIMDB,
    iconFill: icons.topIMDB,
    path: '/top-imdb',
    component: TopIMDB
  },
  {
    id: 7,
    title: 'News',
    iconOutLine: icons.newMovie,
    iconFill: icons.newMovieFill,
    path: '/news',
    component: News
  },
  {
    id: 8,
    title: 'Top Trending',
    iconOutLine: icons.topTrending,
    iconFill: icons.topTrendingFill,
    path: '/top-trending',
    component: TopTrending
  },
  {
    id: 9,
    title: 'Favorites',
    iconOutLine: icons.favorite,
    iconFill: icons.favoriteFill,
    path: '/favorites',
    component: Favorites
  },
  {
    id: 10,
    title: 'List Movies',
    iconOutLine: icons.listMovie,
    iconFill: icons.listMovieFill,
    path: '/list-movies',
    component: ListMovies
  }
]
