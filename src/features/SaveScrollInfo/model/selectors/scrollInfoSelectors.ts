import { createSelector } from '@reduxjs/toolkit'
import { type IStateSchema } from 'app/providers/StoreProvider'
import { type IScrollInfoSchema } from '../types/schema'

const getScrollInfo = (state: IStateSchema): IScrollInfoSchema => state.scrollInfo

export const getScrollInfoPositionByPath = createSelector(
  getScrollInfo,
  (state: IStateSchema, path: string) => path,
  (scrollInfo, path) => scrollInfo.position[path]
)
