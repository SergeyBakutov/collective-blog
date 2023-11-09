import { type IStateSchema } from 'app/providers/StoreProvider'

import { getArticlesError, getArticlesHasMore, getArticlesInited, getArticlesIsLoading, getArticlesLimit, getArticlesPage, getArticlesSearch, getArticlesSort, getArticlesSortOrder, getArticlesType, getArticlesView } from './articlesSelectors'

describe('getArticlesIsLoading:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        isLoading: true
      }
    }
    expect(getArticlesIsLoading(state as IStateSchema)).toBeTruthy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesIsLoading(state as IStateSchema)).toBeFalsy()
  })
})

describe('getArticlesError:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        error: 'Error'
      }
    }
    expect(getArticlesError(state as IStateSchema)).toBe('Error')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesError(state as IStateSchema)).toBeUndefined()
  })
})

describe('getArticlesView:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        view: 'list'
      }
    }
    expect(getArticlesView(state as IStateSchema)).toBe('list')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesView(state as IStateSchema)).toBe('tile')
  })
})

describe('getArticlesPage:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        page: 2
      }
    }
    expect(getArticlesPage(state as IStateSchema)).toBe(2)
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesPage(state as IStateSchema)).toBe(1)
  })
})

describe('getArticlesLimit:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        limit: 4
      }
    }
    expect(getArticlesLimit(state as IStateSchema)).toBe(4)
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesLimit(state as IStateSchema)).toBe(12)
  })
})

describe('getArticlesHasMore:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        hasMore: true
      }
    }
    expect(getArticlesHasMore(state as IStateSchema)).toBeTruthy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesHasMore(state as IStateSchema)).toBeTruthy()
  })
})

describe('getArticlesSort:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        sort: 'views'
      }
    }
    expect(getArticlesSort(state as IStateSchema)).toBe('views')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesSort(state as IStateSchema)).toBe('createdAt')
  })
})

describe('getArticlesSortOrder:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        sortOrder: 'desc'
      }
    }
    expect(getArticlesSortOrder(state as IStateSchema)).toBe('desc')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesSortOrder(state as IStateSchema)).toBe('asc')
  })
})

describe('getArticlesSearch:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        search: 'test'
      }
    }
    expect(getArticlesSearch(state as IStateSchema)).toBe('test')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesSearch(state as IStateSchema)).toBe('')
  })
})

describe('getArticlesType:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        type: 'economics'
      }
    }
    expect(getArticlesType(state as IStateSchema)).toBe('economics')
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesType(state as IStateSchema)).toBe('all')
  })
})

describe('getArticlesInited:', () => {
  it('should return correct data', () => {
    const state: DeepPartial<IStateSchema> = {
      articles: {
        _inited: true
      }
    }
    expect(getArticlesInited(state as IStateSchema)).toBeTruthy()
  })

  it('should return initial value if empty state', () => {
    const state: DeepPartial<IStateSchema> = {}

    expect(getArticlesInited(state as IStateSchema)).toBeFalsy()
  })
})
