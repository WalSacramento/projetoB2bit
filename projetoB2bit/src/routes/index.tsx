import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Home from '../pages/Home'
import { PrivateRoute } from './PrivateRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<PrivateRoute />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
