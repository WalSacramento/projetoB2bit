import { useAuthStore } from '../../store/auth/Auth.store'

export default function Header() {
  const { logout } = useAuthStore()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="w-screen h-16 bg-white flex items-center flex-row-reverse">
      <button className="w-3/12 md:w-64 h-2/3 bg-blueB2 text-white text-lg font-bold py-2 mr-8 rounded-lg focus:outline-none focus:shadow-outline" onClick={handleLogout}>
        Logout
      </button>
    </header>
  )
}
