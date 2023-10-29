import { type IStateSchema } from 'app/providers/StoreProvider'

import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetailsSelectors'

describe('getArticleDetailsData:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        data: {
          id: 1,
          title: 'Article',
          subtitle: 'Description article'
        }
      }
    }
    expect(getArticleDetailsData(state as IStateSchema)).toEqual({
      id: 1,
      title: 'Article',
      subtitle: 'Description article'
    })
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticleDetailsData(state as IStateSchema)).toBeUndefined()
  })
})

describe('getArticleDetailsIsLoading:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }
    expect(getArticleDetailsIsLoading(state as IStateSchema)).toBeTruthy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticleDetailsIsLoading(state as IStateSchema)).toBeFalsy()
  })
})

describe('getArticleDetailsError:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        error: 'Error'
      }
    }
    expect(getArticleDetailsError(state as IStateSchema)).toBe('Error')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticleDetailsError(state as IStateSchema)).toBeUndefined()
  })
})
