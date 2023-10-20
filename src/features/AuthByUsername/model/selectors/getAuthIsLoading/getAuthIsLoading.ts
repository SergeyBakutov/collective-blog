import { createSelector } from '@reduxjs/toolkit'

import { getAuthState } from '../getAuthState/getAuthState'

export const getAuthIsLoading = createSelector(getAuthState, (auth) => auth.isLoading)
