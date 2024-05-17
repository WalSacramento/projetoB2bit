import { create } from 'zustand'
import { LoginStates, LoginStoreProps } from './Auth.props'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../../services/requests/auth/auth'
import { createJSONStorage, persist } from 'zustand/middleware'
import { message } from 'antd'
import { injectZustandInstance } from '../../utils/injectZustandInstance'

const initialState: LoginStates = {
  isLoading: false,
  accessToken: null,
  refreshToken: null,
  errorMessage: ''
}

const useAuthStore = create(
  persist<LoginStoreProps>(
    (set, get) => ({
      ...initialState,

      login: async (
        email: string,
        password: string,
        navigate: ReturnType<typeof useNavigate>
      ) => {
        const { makeAsync } = get()

        const handle = async (): Promise<void> => {
          set({ isLoading: true, accessToken: null, refreshToken: null })

          const response = await loginRequest({ email, password })
          set({
            accessToken: response.tokens.access,
            refreshToken: response.tokens.refresh,
            isLoading: false,
            errorMessage: ''
          })
          navigate('/home')
        }

        const onError = async (): Promise<void> => {
          message.error({
            content: 'Usuário ou senha inválidos',
            duration: 3, 
            style: {
              marginTop: '10vh',
              color: '#ff4d4f',
              fontWeight: 'bold'
            }
          })
          set({ isLoading: false })
        }

        void makeAsync({ handle, onError })
      },

      logout: () => {
        set({ accessToken: null, refreshToken: null })
      },

      makeAsync: async ({ handle, onError, onFinally }) => {
        set({ isLoading: true })
        try {
          await handle()
        } catch (error: any) {
          if (onError != null) {
            return onError(error)
          }
        } finally {
          set({ isLoading: false })
          if (onFinally) onFinally()
        }
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

injectZustandInstance(useAuthStore)
export default useAuthStore
