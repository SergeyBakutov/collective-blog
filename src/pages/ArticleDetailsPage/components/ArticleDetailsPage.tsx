import { memo, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { ArticleDetails } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { AddNewCommentForArticle } from 'features/AddNewCommentForArticle'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
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

  useAsyncReducer({ reducers, removeAfterUnmount: true })

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(Number(id)))
    }
  }, [dispatch, id])

  const onSendNewComment = useCallback(() => {
    dispatch(fetchCommentsByArticleId(Number(id)))
  }, [dispatch, id])

  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <div className={classNames(classes.wrapper, {}, [className])}>
        {t('Article not found')}
      </div>
    )
  }

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <ArticleDetails id={id ?? '1'} />
      <div className={classes.comments}>
        <Text title={t('Comments')} />
        <AddNewCommentForArticle onSendNewComment={onSendNewComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </div>
  )
}

export default memo(ArticleDetailsPage)
