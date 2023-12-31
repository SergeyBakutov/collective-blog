import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { type TStateSchemaKey, type IStoreWithReducerManager, type IStateSchema } from 'app/providers/StoreProvider'
import { useAppDispatch } from '../useAppDispatch'

export type TReducersList = {
  [name in TStateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>
}

interface IUseAsyncReducerProps {
  reducers: TReducersList
  removeAfterUnmount?: boolean
}

export function useAsyncReducer({ reducers, removeAfterUnmount = false }: IUseAsyncReducerProps): void {
  const dispatch = useAppDispatch()
  const store = useStore() as IStoreWithReducerManager

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mountedReducer = mountedReducers[name as TStateSchemaKey]

      if (!mountedReducer) {
        store.reducerManager.add(name as TStateSchemaKey, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as TStateSchemaKey)
          dispatch({ type: `@REMOVE ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
