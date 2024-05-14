import { useEffect } from 'react'
import { useUserStore } from '../../store/user/User.store'
import { useAuthStore } from '../../store/auth/Auth.store'

export default function ProfileInfo() {
  const { getUser, user, isLoading } = useUserStore()
  const { tokens } = useAuthStore()

  useEffect(() => {
    if (tokens) {
      getUser(tokens.access)
    }
  }, [getUser, tokens])

  useEffect(() => {
    console.log(user, 'user profile')
  }, [user])

  return (
    <div className="w-full md:w-96 bg-white rounded-xl shadow-2xl">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-center my-8">
            <p className="mb-2">Profile picture</p>
            <img
              src={user?.avatar ? user.avatar : '/profile.png'}
              alt="Profile avatar"
              className="w-14 h-14 rounded-lg"
            />
          </div>
          <div className="w-10/12 text-sm mb-5">
            <p>
              Your <span className="font-bold">Name</span>
            </p>
            <p className="bg-boxGray appearance-none border rounded-lg w-full py-4 px-3 text-textBlack leading-tight focus:outline-none focus:shadow-outline">
              {user?.name}
            </p>
          </div>
          <div className="w-10/12 text-sm">
            <p>
              Your <span className="font-bold">E-mail</span>
            </p>
            <p className="bg-boxGray appearance-none border rounded-lg w-full mb-8 py-4 px-3 text-textBlack leading-tight focus:outline-none focus:shadow-outline">
              {user?.email}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
