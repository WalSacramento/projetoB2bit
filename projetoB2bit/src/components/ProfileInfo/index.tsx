export default function ProfileInfo() {
  return (
    <div className="w-full md:w-96 bg-white rounded-xl shadow-2xl">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center my-8">
          <p className="mb-2">Profile picture</p>
          <img
            src="https://avatars.githubusercontent.com/u/66279500?v=4"
            alt="Profile"
            className="w-14 h-14 rounded-lg"
          />
        </div>
        <div className="w-10/12 text-sm mb-5">
          <p>
            Your <span className="font-bold">Name</span>
          </p>
          <p className="bg-boxGray appearance-none border rounded-lg w-full py-4 px-3 text-textBlack leading-tight focus:outline-none focus:shadow-outline">
            Lucas
          </p>
        </div>
        <div className="w-10/12 text-sm">
          <p>
            Your <span className="font-bold">E-mail</span>
          </p>
          <p className="bg-boxGray appearance-none border rounded-lg w-full mb-8 py-4 px-3 text-textBlack leading-tight focus:outline-none focus:shadow-outline">
            Lucas
          </p>
        </div>
      </div>
    </div>
  )
}
