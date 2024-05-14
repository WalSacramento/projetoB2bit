export interface UserStoreProps extends UserStates{
  user: User | null;
  getUser: (acessToken: string) => void;
  clearUser: () => void;
  makeAsync: <T>(props: {
    handle: () => Promise<T>
    onError?: (error: any) => void
    onFinally?: () => void
  }) => Promise<void>
}

export type UserStates = {
  user: User | null;
  isLoading: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  avatar: string | null;
  type: string;
  created: string;
  modified: string;
  role: string;
  tokens: Tokens | null;
}

export interface Tokens {
  refresh: string;
  access: string;
}