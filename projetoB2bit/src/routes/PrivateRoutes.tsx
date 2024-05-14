import { Tokens } from '../store/auth/Auth.props'
import { useAuthStore } from '../store/auth/Auth.store'
import { jwtDecode } from 'jwt-decode'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
  const { tokens } = useAuthStore()

  const tokenIsValid = (tokens: Tokens | null): boolean => {
    if (tokens && tokens.access) {
      try {
        const decoded: any = jwtDecode(tokens.access)
        const expirate = new Date(decoded.exp * 1000)
        const now = new Date()
        return now < expirate
      } catch (error) {
        return false
      }
    }
    return false
  }

  if (!tokenIsValid(tokens)) {
    return <Navigate to="/login" />
  }
  return <Outlet />
}
