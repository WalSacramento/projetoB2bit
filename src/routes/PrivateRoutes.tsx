import  useAuthStore  from '../store/auth/Auth.store'
import { Navigate, Outlet } from 'react-router-dom'
import { verifyToken } from '../utils/tokenVerification'

export const PrivateRoute = () => {
  const { accessToken } = useAuthStore()

  if (!verifyToken(accessToken)) {
    return <Navigate to="/" />
  }
  return <Outlet />
}
