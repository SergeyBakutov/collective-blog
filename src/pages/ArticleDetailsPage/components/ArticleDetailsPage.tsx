import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { AddNewCommentForArticle } from 'features/AddNewCommentForArticle'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { CommentList } from 'entities/Comment'
import { Button } from 'shared/components/Button'
import { HStack, VStack } from 'shared/components/Stack'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
import { APP_ROUTES } from 'shared/router'
import { classNames } from 'shared/utils/classNames'
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/articleDetailsComments'
import { getCanEditArticle } from '../model/selectors/articleDetailsPage'
import { getArticleDetailsRecommendationsIsLoading } from '../model/selectors/articleDetailsRecommendations'
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { fetchRecommendations } from '../model/services/fetchRecommendations/fetchRecommendations'
import { articleDetailsCommentsSelectors } from '../model/slices/articleDetailsCommentsSlice'
import { articleDetailsRecommendationsSelectors } from '../model/slices/articleDetailsRecommendationsSlice'
import { articleDetailsPageReducer } from '../model/slices/articleDetailsReducer'
import classes from './ArticleDetailsPage.module.scss'

interface IArticleDetailsPageProps {
  className?: string
}

const reducers: TReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = (props) => {
  const { className } = props
  const { id = '' } = useParams<{ id: string }>()
  const { t } = useTranslation('article-details')
  const comments = useSelector(articleDetailsCommentsSelectors.selectAll)
  const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
  const recommendations = useSelector(articleDetailsRecommendationsSelectors.selectAll)
  const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading)
  const canEdit = useSelector(getCanEditArticle)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useAsyncReducer({ reducers, removeAfterUnmount: true })

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchCommentsByArticleId(Number(id)))
      dispatch(fetchRecommendations())
    }
  }, [dispatch, id])

  const onBackToTheList = useCallback(() => {
    navigate(APP_ROUTES.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(APP_ROUTES.articleDetails + id + '/edit')
  }, [id, navigate])

  const onSendNewComment = useCallback(() => {
    dispatch(fetchCommentsByArticleId(Number(id)))
  }, [dispatch, id])

  return (
    <Page className={classNames('', {}, [className])}>
      <HStack alignItems="center" justifyContent="spaceBetween">
        <Button color="outline" onClick={onBackToTheList}>
          {t('Back to the list')}
        </Button>
        {canEdit && (
          <Button color="outline" onClick={onEditArticle}>
            {t('Edit')}
          </Button>
        )}
      </HStack>

      <ArticleDetails id={id} />
      <VStack className={classes.recommendations} gap="12" fullWidth>
        <Text title={t('Recommendations')} />
        <ArticleList
          className={classes.recommendationsList}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          target="_blank"
        />
      </VStack>
      <VStack className={classes.comments} gap="12">
        <Text title={t('Comments')} />
        <AddNewCommentForArticle onSendNewComment={onSendNewComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    </Page>
  )
}

export default memo(ArticleDetailsPage)
