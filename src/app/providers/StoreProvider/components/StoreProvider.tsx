import { Provider } from 'react-redux'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const store = createStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>,
    navigate
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
