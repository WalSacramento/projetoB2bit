import { create } from "zustand"
import { UserStates, UserStoreProps } from "./User.props"
import { getProfileRequest } from "../../services/requests/user/user"
import { message } from "antd"

const initialState: UserStates = {
  user: null,
  isLoading: false
}

export const useUserStore = create<UserStoreProps>((set, get) => (
  {
    ...initialState,

    getUser: async () => {
      const { makeAsync } = get()

      const handle = async (): Promise<void> => {
        set({ isLoading: true })
        const response = await getProfileRequest()
        set({ user: response, isLoading: false })
      }

      const onError = async (): Promise<void> => {
        message.error({
          content: 'Erro ao buscar usuário',
          duration: 3, 
          style: {
            marginTop: '10vh',
            color: '#ff4d4f',
            fontWeight: 'bold'
          }
        })
        set({ isLoading: true })
        
      }

      void makeAsync({ handle, onError })
    },

    clearUser: () => {
      set({ user: null })
    },

    makeAsync: async ({ handle, onError, onFinally }) => {
      set({ isLoading: true });
      try {
          await handle();
      } catch (error:any) {
         
          if (onError != null) { 
              if (error.response.data.message.includes('Number of attempts exceeded')) { 
                  return (
                    alert('Número de tentativas excedidas, tente novamente mais tarde')
                  )
                }
                return onError(error);
          } 
          
      } finally {
          set({ isLoading: false });
          if (onFinally) onFinally();
      }
  },
  }
))