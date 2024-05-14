import { create } from "zustand";
import { LoginStates, LoginStoreProps } from "./Auth.props";
import { useNavigate } from 'react-router-dom';
import { loginRequest } from "../../services/requests/auth/auth";
import { createJSONStorage, persist } from "zustand/middleware";


const initialState: LoginStates = {
  isLoading: false,
  tokens: null
}

export const useAuthStore = create(persist<LoginStoreProps> ((set, get) => ({
  ...initialState,

  login: async (
    email: string,
    password: string,
    navigate: ReturnType<typeof useNavigate>
  ) => {
    const { makeAsync } = get();

    const handle = async (): Promise<void> => {
      set({ isLoading: true });
      const response = await loginRequest({ email, password });
      // Atualize o estado com os novos campos
      set({tokens: response.tokens, isLoading: false });
      navigate('/');
      console.log(response.tokens, 'tokens')
    }

    const onError = async (): Promise<void> => {
      console.log('Usuário ou senha inválidos');
    }

    void makeAsync({ handle, onError });
  },

  logout: () => {
    set({ tokens: null });
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
}), 
{
  name: 'auth-storage',
  storage: createJSONStorage(() => localStorage)
}
)
)