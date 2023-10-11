import { type IStateSchema } from 'app/providers/StoreProvider'

import { type ICounterStateSchema } from '../../types/schema'

export const getCounter = (state: IStateSchema): ICounterStateSchema => state.counter
