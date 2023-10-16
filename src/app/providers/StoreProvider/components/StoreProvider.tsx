import { Provider } from 'react-redux'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'

import { createStore } from '../config/store'
import { type IStateSchema } from '../types/schema'

interface IStoreProviderProps {
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: React.FC<React.PropsWithChildren<IStoreProviderProps>> = ({
  children,
  initialState,
  asyncReducers
}) => {
  const store = createStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
