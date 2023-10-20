import { createSelector } from '@reduxjs/toolkit'

import { getProfileState } from '../getProfileState/getProfileState'

export const getData = createSelector(getProfileState, (profile) => profile.data)
