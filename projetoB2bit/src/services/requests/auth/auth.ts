import { instance } from "../../api"

export const loginRequest = async ({
  email,
  password
}: {
  email: string
  password: string
}) => {
  try {
    console.log(email, password, 'email e senha')
    const response = await instance.post('/login/', {
      email,
      password
    })


    console.log(response)

    return response
  } catch (error) {
    console.error(error)
    return error
}
}