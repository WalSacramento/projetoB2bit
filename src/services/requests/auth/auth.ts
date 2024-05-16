import { instance } from "../../api"

export const loginRequest = async ({
  email,
  password
}: {
  email: string
  password: string
}) => {
  try {
    const {data} = await instance.post('/login/', {
      email,
      password
    })

    return data
  } catch (error) {
    console.error(error)
    return await Promise.reject(error)
    
}
}