import { instance } from "../../api"

export const getProfileRequest = async ({
  accessToken
}: {
  accessToken: string
}) => {
  try {
    const { data } = await instance.get('/profile/', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    console.log(data, '|data getProfileRequest')

    return data
  } catch (error) {
    console.error(error)
    return await Promise.reject(error)
  }
}