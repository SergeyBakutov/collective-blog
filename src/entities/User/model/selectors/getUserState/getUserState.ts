import { type IStateSchema } from 'app/providers/StoreProvider'

import { type IUserStateSchema } from '../../types/schema'

export const getUserState = (state: IStateSchema): IUserStateSchema => state.user
