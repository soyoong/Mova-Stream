import 'animate.css'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { pageRoutes } from './routes'
import { WrapperLayout } from './layouts'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './pages'

// const cx = classNames.bind(styles)

function App() {
  return <Home />
}

export default App
