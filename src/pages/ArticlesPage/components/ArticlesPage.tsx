import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { ArticleList, type TArticlesView } from 'entities/Article'
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { classNames } from 'shared/utils/classNames'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
import { Page } from 'widgets/Page'

import { getArticlesError, getArticlesIsLoading, getArticlesView } from '../model/selectors/articlesSelectors'
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
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articles = useSelector(articlesSelectors.selectAll)
  const isLoading = useSelector(getArticlesIsLoading)
  const error = useSelector(getArticlesError)
  const view = useSelector(getArticlesView)

  useAsyncReducer({ reducers })

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(initArticles())
    }
  }, [dispatch])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticles())
  }, [dispatch])

  const onViewClick = useCallback((view: TArticlesView) => {
    dispatch(articlesActions.setView(view))
  }, [dispatch])

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
      <ArticleViewSwitcher view={view ?? 'tile'} onViewClick={onViewClick} />
      <ArticleList view={view} isLoading={isLoading} articles={articles} />
    </Page>
  )
}

export default memo(ArticlesPage)
