import { type IStateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsRecommendationsError, getArticleDetailsRecommendationsIsLoading } from './articleDetailsRecommendations'

describe('getArticleDetailsRecommendationsIsLoading:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetailsPage: {
        recommendations: {
          isLoading: true
        }
      }
    }
    expect(getArticleDetailsRecommendationsIsLoading(state as IStateSchema)).toBeTruthy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticleDetailsRecommendationsIsLoading(state as IStateSchema)).toBeFalsy()
  })
})

describe('getArticleDetailsRecommendationsError:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetailsPage: {
        recommendations: {
          error: 'Error'
        }
      }
    }
    expect(getArticleDetailsRecommendationsError(state as IStateSchema)).toBe('Error')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticleDetailsRecommendationsError(state as IStateSchema)).toBeUndefined()
  })
})
