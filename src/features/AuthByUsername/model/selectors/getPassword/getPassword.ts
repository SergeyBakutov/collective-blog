import { createSelector } from '@reduxjs/toolkit'

import { getAuthState } from '../getAuthState/getAuthState'

export const getPassword = createSelector(getAuthState, (auth) => auth.password)
