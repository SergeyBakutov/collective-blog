import { createSelector } from '@reduxjs/toolkit'

import { getProfileState } from '../getProfileState/getProfileState'

export const getError = createSelector(getProfileState, (profile) => profile.error)
