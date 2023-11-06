import { memo, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddNewCommentForArticle } from 'features/AddNewCommentForArticle'
import { Button } from 'shared/components/Button'
import { Page } from 'shared/components/Page'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
import { APP_ROUTES } from 'shared/router'
import { classNames } from 'shared/utils/classNames'

import { getArticleDetailsCommentsIsLoading } from '../model/selectors/articleDetailsComments'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsCommentsReducer, articleDetailsCommentsSelectors } from '../model/slice/articleDetailsCommentsSlice'

import classes from './ArticleDetailsPage.module.scss'

interface IArticleDetailsPageProps {
  className?: string
}

const reducers: TReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article-details')
  const comments = useSelector(articleDetailsCommentsSelectors.selectAll)
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useAsyncReducer({ reducers, removeAfterUnmount: true })

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(Number(id)))
    }
  }, [dispatch, id])

  const onBackToTheList = useCallback(() => {
    navigate(APP_ROUTES.articles)
  }, [navigate])

  const onSendNewComment = useCallback(() => {
    dispatch(fetchCommentsByArticleId(Number(id)))
  }, [dispatch, id])

  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <Page className={classNames(classes.wrapper, {}, [className])}>
        {t('Article not found')}
      </Page>
    )
  }

  return (
    <Page className={classNames(classes.wrapper, {}, [className])}>
      <Button color="outline" onClick={onBackToTheList}>
        {t('Back to the list')}
      </Button>
      <ArticleDetails id={id ?? '1'} />
      <div className={classes.comments}>
        <Text title={t('Comments')} />
        <AddNewCommentForArticle onSendNewComment={onSendNewComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </Page>
  )
}

export default memo(ArticleDetailsPage)
