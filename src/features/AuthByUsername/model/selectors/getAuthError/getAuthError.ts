import { createSelector } from '@reduxjs/toolkit'
import { getAuthState } from '../getAuthState/getAuthState'

export const getAuthError = createSelector(getAuthState, (auth) => auth?.error)
