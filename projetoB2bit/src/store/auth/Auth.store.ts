import { create } from "zustand";
import { LoginStates, LoginStoreProps } from "./Auth.props";
import { useNavigate } from 'react-router-dom';
import { loginRequest } from "../../services/requests/auth/auth";


const initialState: LoginStates = {
  email: '',
  password: '',
  isLoading: false,
  user: null,
  tokens: null
}

export const useAuthStore = create<LoginStoreProps> ((set, get) => ({
  ...initialState,

  login: async (
    email: string,
    password: string,
    navigate: ReturnType<typeof useNavigate>
  ) => {
    const { makeAsync } = get();

    const handle = async (): Promise<void> => {
      set({ email, password, isLoading: true });
      const response = await loginRequest({ email, password });
      // Atualize o estado com os novos campos
      set({ user: response.user, tokens: response.tokens, isLoading: false });
      navigate('/');
      console.log(response.tokens, 'tokens')
    }

    const onError = async (): Promise<void> => {
      console.log('Usuário ou senha inválidos');
    }

    void makeAsync({ handle, onError });
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