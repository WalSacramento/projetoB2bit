import { useNavigate } from 'react-router-dom';

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
  tokens: Tokens | null;
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