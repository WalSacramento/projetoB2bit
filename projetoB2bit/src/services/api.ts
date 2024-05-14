import axios from "axios"

const createInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json;version=v1_web',
    },
  })

  return instance
}

export const instance = createInstance('https://api.homologation.cliqdrive.com.br/auth/')