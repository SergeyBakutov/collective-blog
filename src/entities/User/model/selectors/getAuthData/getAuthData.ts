import { createSelector } from '@reduxjs/toolkit'

import { getUserState } from '../getUserState/getUserState'

export const getAuthData = createSelector(getUserState, (user) => user.authData)
