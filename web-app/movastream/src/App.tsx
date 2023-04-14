import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { pageRoutes } from './utils/routes/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {pageRoutes.map((route, index) => {
          const Page = route.page
          return <Route key={index} path={route.path} element={<Page />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}
export default App
