import { type IStateSchema } from 'app/providers/StoreProvider'

import { type IProfileStateSchema } from '../../types/schema'

export const getProfileState = (state: IStateSchema): IProfileStateSchema | undefined => state.profile
