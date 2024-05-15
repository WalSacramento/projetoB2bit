import axios from "axios"
import { AxiosRequestConfig } from "axios"
import { store } from "../utils/injectZustandInstance"

const createInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json;version=v1_web',
    },
  })

  instance.interceptors.request.use(
    async (config: AxiosRequestConfig): Promise<any> => {
      const { accessToken } = store.getState()
      console.log(accessToken, 'tokens interceptor')

      if (accessToken) {
        config.headers = {
          ...config?.headers,
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
      return config
    },
    async (error) => {
      return await Promise.reject(error)
    }
  )

  return instance
}

export const instance = createInstance('https://api.homologation.cliqdrive.com.br/auth/')