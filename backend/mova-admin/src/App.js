// import { useState } from 'react'
import './app.css'
import SideBar from 'components/sidebar/SideBar'
import TopBar from 'components/topbar/TopBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { sidebarData } from 'constants/appDefineData'

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

function App() {
  return (
    <div className="container">
      <SideBar />
      <div class="wrapper">
        <TopBar />
        <div class="main-container">
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
