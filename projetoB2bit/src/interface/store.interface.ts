interface Factory {
  handle: () => Promise<void>
  onError?: (error: any) => any
  onFinally?: () => void
}
export interface Store {
  makeAsync: (props: Factory) => void
  error: string | null
  isLoading: boolean
}
