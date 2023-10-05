import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Login } from './pages/login-page/login-page'
import { Home } from './pages/home-page/home-page'
import { Movie } from './pages/movie-page/movie-page'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element = {<Home/>} exact/>
        <Route path="/movie/:id" element = {<Movie/>} exact/>
      </Routes>
    </BrowserRouter>
  )
}
