import { jwtDecode } from 'jwt-decode'


export const verifyToken = (token: string | null): boolean => {
  if (!token) {
    return false;
  }

  try {
    const decoded: any = jwtDecode(token)
    const expirate = new Date(decoded.exp * 1000)
    const now = new Date()
    return now < expirate
  } catch (error) {
    return false
  }
}
