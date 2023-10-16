import { type IStateSchema } from 'app/providers/StoreProvider'

import { initialState } from '../../slice/authSlice'
import { type IAuthStateSchema } from '../../types/schema'

export const getAuthState = (state: IStateSchema): IAuthStateSchema => state?.auth ?? initialState
