import { type IStateSchema } from 'app/providers/StoreProvider'

import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from './articleDetailsComments'

describe('getArticleDetailsCommentsIsLoading:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetailsComments: {
        isLoading: true
      }
    }
    expect(getArticleDetailsCommentsIsLoading(state as IStateSchema)).toBeTruthy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticleDetailsCommentsIsLoading(state as IStateSchema)).toBeFalsy()
  })
})

describe('getArticleDetailsCommentsError:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetailsComments: {
        error: 'Error'
      }
    }
    expect(getArticleDetailsCommentsError(state as IStateSchema)).toBe('Error')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticleDetailsCommentsError(state as IStateSchema)).toBeUndefined()
  })
})
