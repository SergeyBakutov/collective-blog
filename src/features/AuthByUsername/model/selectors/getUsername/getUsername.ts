import { createSelector } from '@reduxjs/toolkit'

import { getAuthState } from '../getAuthState/getAuthState'

export const getUsername = createSelector(getAuthState, (auth) => auth.username)
