import { createSelector } from '@reduxjs/toolkit'

import { getAuthState } from '../getAuthState/getAuthState'

export const getIsLoading = createSelector(getAuthState, (auth) => auth.isLoading)
