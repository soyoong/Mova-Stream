import 'animate.css'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { pageRoutes } from './routes'
import { WrapperLayout } from './layouts'
import { BrowserRouter } from 'react-router-dom'

// const cx = classNames.bind(styles)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {pageRoutes.map((route, index) => {
          const Page = route.page
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <WrapperLayout>
                  <Page />
                </WrapperLayout>
              }
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
