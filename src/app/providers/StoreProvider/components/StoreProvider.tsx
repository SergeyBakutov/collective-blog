import { Provider } from 'react-redux'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const store = createStore(
    navigate,
    initialState,
    asyncReducers
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
