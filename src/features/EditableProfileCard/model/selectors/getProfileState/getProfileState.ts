import { type IStateSchema } from 'app/providers/StoreProvider'

import { initialState } from '../../slice/profileSlice'
import { type IProfileStateSchema } from '../../types/schema'

export const getProfileState = (state: IStateSchema): IProfileStateSchema => state.profile ?? initialState
