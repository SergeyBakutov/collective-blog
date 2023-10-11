import { Provider } from 'react-redux'

import { createStore } from '../config/store'
import { type IStateSchema } from '../types/schema'

interface IStoreProviderProps {
  initialState?: IStateSchema
}

export const StoreProvider: React.FC<React.PropsWithChildren<IStoreProviderProps>> = ({ children, initialState }) => {
  const store = createStore(initialState)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
