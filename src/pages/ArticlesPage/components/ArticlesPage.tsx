import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { ArticlesSearch } from 'features/ArticlesSearch'
import { ArticlesSort } from 'features/ArticlesSort'
import { ArticlesTabs } from 'features/ArticlesTabs'
import { ArticlesViewSwitcher } from 'features/ArticlesViewSwitcher'
import { ArticleList, type TArticleType, type TArticlesSort, type TArticlesView } from 'entities/Article'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
import { useDebounce } from 'shared/hooks/useDebounce'
import { type TSortOrder } from 'shared/types/sortOrder'
import { classNames } from 'shared/utils/classNames'
import { getArticlesError, getArticlesType, getArticlesIsLoading, getArticlesSearch, getArticlesSort, getArticlesSortOrder, getArticlesView } from '../model/selectors/articlesSelectors'
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles'
import { fetchNextArticles } from '../model/services/fetchNextArticles/fetchNextArticles'
import { initArticles } from '../model/services/initArticles/initArticles'
import { articlesActions, articlesReducer, articlesSelectors } from '../model/slices/articlesSlice'
import classes from './ArticlesPage.module.scss'

interface IArticlesPageProps {
  className?: string
}

const reducers: TReducersList = {
  articles: articlesReducer
}

const ArticlesPage: React.FC<IArticlesPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const articles = useSelector(articlesSelectors.selectAll)
  const isLoading = useSelector(getArticlesIsLoading)
  const error = useSelector(getArticlesError)
  const view = useSelector(getArticlesView)
  const sort = useSelector(getArticlesSort)
  const sortOrder = useSelector(getArticlesSortOrder)
  const search = useSelector(getArticlesSearch)
  const type = useSelector(getArticlesType)
  const [searchParams] = useSearchParams()

  useAsyncReducer({ reducers })

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(initArticles(searchParams))
    }
  }, [dispatch, searchParams])

  const fetchData = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(articlesActions.setPage(1))
      dispatch(fetchArticles({ replace: true }))
    }
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onLoadNextPart = useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchNextArticles())
    }
  }, [dispatch])

  const onViewClick = useCallback((view: TArticlesView) => {
    dispatch(articlesActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((sort: TArticlesSort) => {
    dispatch(articlesActions.setSort(sort))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSortOrder = useCallback((sortOrder: TSortOrder) => {
    dispatch(articlesActions.setSortOrder(sortOrder))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesActions.setSearch(search))
    debouncedFetchData()
  }, [debouncedFetchData, dispatch])

  const onChangeType = useCallback((type: TArticleType) => {
    dispatch(articlesActions.setType(type))
    fetchData()
  }, [dispatch, fetchData])

  if (error) {
    return (
      <Page className={classNames(classes.wrapper, {}, [className])}>
        <Text color="error" title={t('Error loading articles. Try to reload the page')} align="center" />
      </Page>
    )
  }

  return (
    <Page
      className={classNames(classes.wrapper, {}, [className])}
      onScrollEnd={onLoadNextPart}
    >
      <div className={classes.sortPlusView}>
        <ArticlesSort
          sort={sort}
          sortOrder={sortOrder}
          onChangeSort={onChangeSort}
          onChangeSortOrder={onChangeSortOrder}
        />
        <ArticlesViewSwitcher view={view} onViewClick={onViewClick} />
      </div>

      <ArticlesSearch search={search} onChangeSearch={onChangeSearch} />

      <ArticlesTabs type={type} onChangeType={onChangeType} />
      <ArticleList view={view} isLoading={isLoading} articles={articles} />

      {!isLoading && !articles.length && !error && (
        <Text title={t('Articles not found')} align="center" />
      )}
    </Page>
  )
}

export default memo(ArticlesPage)
