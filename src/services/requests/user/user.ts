import { instance } from "../../api"

export const getProfileRequest = async () => {
  try {
    const { data } = await instance.get('/profile/')
    return data
  } catch (error) {
    console.error(error)
    return await Promise.reject(error)
  }
}