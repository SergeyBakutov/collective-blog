import { createSelector } from '@reduxjs/toolkit'

import { getAuthState } from '../getAuthState/getAuthState'

export const getAuthPassword = createSelector(getAuthState, (auth) => auth?.password ?? '')
