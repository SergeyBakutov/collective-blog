import { createSelector } from '@reduxjs/toolkit'

import { getProfileState } from '../getProfileState/getProfileState'

export const getProfileFormData = createSelector(getProfileState, (profile) => profile.formData)
