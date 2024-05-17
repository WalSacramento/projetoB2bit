import { Avatar, Skeleton } from 'antd'
import { ProfileInfoProps } from './ProfileInfo.props'

export default function ProfileInfo({ isLoading, user }: ProfileInfoProps) {
  return (
    <div className="w-10/12 sm:w-1/2 md:w-1/3 xl:w-3/12 bg-white rounded-xl shadow-2xl">
      {isLoading ? (
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-center my-8">
            <p className="mb-2">Profile picture</p>
            <Skeleton.Avatar active />
          </div>
          <div className="w-10/12 text-sm mb-5">
            <p>
              Your <span className="font-bold">Name</span>
            </p>
            <div className="bg-boxGray appearance-none border rounded-lg w-full py-2 px-3 text-textBlack leading-tight focus:outline-none focus:shadow-outline">
              <Skeleton.Input active style={{ width: '100%' }} size="large" />
            </div>
          </div>
          <div className="w-10/12 text-sm mb-8">
            <p>
              Your <span className="font-bold">Name</span>
            </p>
            <div className="bg-boxGray appearance-none border rounded-lg w-full py-2 px-3 text-textBlack leading-tight focus:outline-none focus:shadow-outline">
              <Skeleton.Input active style={{ width: '100%' }} size="large" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-center my-8">
            <p className="mb-2">Profile picture</p>
            {user?.avatar ? (
              <img
                src={user.avatar.low}
                alt="Profile avatar"
                className="w-14 h-14 rounded-lg"
              />
            ) : (
              <Avatar className="w-14 h-14 rounded-lg text-blueB2 text-3xl font-extrabold">
                {user?.name.charAt(0)}
              </Avatar>
            )}
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
