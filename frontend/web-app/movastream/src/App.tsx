import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './utils/route/routes'
import { Wrapper } from './layouts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.publicRoutes.map((route, index) => {
          const Page = route.page
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Wrapper singlePage={route.singlePage}>
                  <Page />
                </Wrapper>
              }
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}
export default App

// {routes.publicRoutes.map((route, index) => {
//   const Page = route.page
//   return <Route key={index} path={route.path} element={<Page />} />
// })}
