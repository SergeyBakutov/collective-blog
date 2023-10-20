import { createSelector } from '@reduxjs/toolkit'

import { getProfileState } from '../getProfileState/getProfileState'

export const getIsLoading = createSelector(getProfileState, (profile) => profile.isLoading)
