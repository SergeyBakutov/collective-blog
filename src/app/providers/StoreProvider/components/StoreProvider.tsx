import { type ReducersMapObject } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { createStore } from '../config/store'
import { type IStateSchema } from '../types/schema'

interface IStoreProviderProps {
  initialState?: IStateSchema
  asyncReducers?: ReducersMapObject<IStateSchema>
}

export const StoreProvider: React.FC<React.PropsWithChildren<IStoreProviderProps>> = ({
  children,
  initialState,
  asyncReducers
}) => {
  const store = createStore(
    initialState,
    asyncReducers
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
