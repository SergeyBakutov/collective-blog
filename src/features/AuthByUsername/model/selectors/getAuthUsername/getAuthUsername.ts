import { createSelector } from '@reduxjs/toolkit'

import { getAuthState } from '../getAuthState/getAuthState'

export const getAuthUsername = createSelector(getAuthState, (auth) => auth?.username ?? '')
