import { useNavigate } from 'react-router-dom';
import { Store } from '../../interface/store.interface';

export type User = {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  avatar: string | null;
  type: string;
  created: string;
  modified: string;
  role: string;
}

export type Tokens = {
  refresh: string;
  access: string;
}

export type LoginStates = {
  isLoading: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  errorMessage: string;
}

export interface LoginStoreProps extends LoginStates {
  login: (email: string, password: string, navigate: ReturnType<typeof useNavigate>) => void;
  logout: () => void;

  makeAsync: <T>(props: {
    handle: () => Promise<T>
    onError?: (error: any) => void
    onFinally?: () => void
  }) => Promise<void>
}

export interface AuthStoreProps extends Store {
  accessToken: string | null 
  refreshToken: string | null
  login: (cpf: string, password: string) => Promise<void>
  setPasswordForgottenRequest: (cpf: string) => Promise<void>
  checkUserAndSendRequest: (cpf: string) => Promise<void> 
  logout: () => void
  getRefreshToken: () => Promise<string>  
  authType: number[]
}