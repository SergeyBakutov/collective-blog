import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { type Reducer } from '@reduxjs/toolkit'

import { type TStateSchemaKey, type IStoreWithReducerManager } from 'app/providers/StoreProvider'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

export type TReducersList = {
  [name in TStateSchemaKey]?: Reducer
}

interface IUseAsyncReducerProps {
  reducers: TReducersList
  removeAfterUnmount?: boolean
}

export function useAsyncReducer({ reducers, removeAfterUnmount = false }: IUseAsyncReducerProps): void {
  const dispatch = useAppDispatch()
  const store = useStore() as IStoreWithReducerManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as TStateSchemaKey, reducer)
      dispatch({ type: `@INIT ${name} reducer` })
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
