import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IProfile } from 'entities/Profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type IProfileStateSchema } from '../types/schema'

export const initialState: IProfileStateSchema = {
  isLoading: false,
  readonly: true
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateFormData: (state, action: PayloadAction<IProfile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload
      }
    },
    cancelEdit: (state) => {
      state.formData = state.data
      state.readonly = true
      state.validateErrors = undefined
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
      state.data = action.payload
      state.formData = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.error = action.payload
      state.isLoading = false
    })
    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true
      state.validateErrors = undefined
    })
    builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
      state.data = action.payload
      state.formData = action.payload
      state.isLoading = false
      state.readonly = true
      state.validateErrors = undefined
    })
    builder.addCase(updateProfileData.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        state.error = action.payload
      } else {
        state.validateErrors = action.payload
      }
      state.isLoading = false
    })
  }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
