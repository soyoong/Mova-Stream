import { useState } from 'react'
import './app.css'
import SideBar from 'components/sidebar/SideBar'
import TopBar from 'components/topbar/TopBar'
import Home from 'pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { appDefineData } from 'constants/appDefineData'

function App() {
  return (
    <Router>
      <div className="container">
        <SideBar />
        <div class="wrapper">
          <TopBar />
          <div class="main-container">
            <Routes>
              {appDefineData.map((item, index) => {
                return <Route path={item.path} element={<item.component />} />
              })}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
