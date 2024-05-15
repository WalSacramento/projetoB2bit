import { useEffect } from 'react'
import Header from '../../components/Header'
import ProfileInfo from '../../components/ProfileInfo'
import  useAuthStore  from '../../store/auth/Auth.store'
import { useUserStore } from '../../store/user/User.store'

export default function Home() {
  const { getUser, user, isLoading } = useUserStore()
  const { accessToken } = useAuthStore()

  useEffect(() => {
    if (accessToken) {
      getUser(accessToken)
    }
  }, [getUser, accessToken])

  return (
    <div className="h-screen">
      <Header />
      <div className="bg-backgroundHome flex flex-col items-center h-full pt-24 bg-bgGray">
        <ProfileInfo isLoading={isLoading} user={user} />
      </div>
    </div>
  )
}
