/* eslint-disable @typescript-eslint/ban-ts-comment */
 
import { StoreApi, UseBoundStore } from 'zustand'
import { AuthStoreProps } from '../store/auth/Auth.props'

export let accessToken: string
// @ts-expect-error
export let store: UseBoundStore<AuthStoreProps, StoreApi<AuthStoreProps>>

export const injectZustandInstance = (
// @ts-expect-error
  zustand: UseBoundStore<AuthStoreProps, StoreApi<AuthStoreProps>>
): void => {
  store = zustand
}

export const injectTokenToAxios = (token: string): void => {
  accessToken = token
}
