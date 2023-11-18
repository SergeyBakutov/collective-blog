import { createSelector } from '@reduxjs/toolkit'
import { getUserState } from '../getUserState/getUserState'

export const getUserIsCheckedAuthData = createSelector(getUserState, (user) => user._isCheckedAuthData)
