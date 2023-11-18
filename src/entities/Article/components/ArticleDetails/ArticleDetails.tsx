import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import CalendarIcon from 'shared/assets/icons/calendar-icon.svg'
import EyeIcon from 'shared/assets/icons/eye-icon.svg'
import { Avatar } from 'shared/components/Avatar'
import { Icon } from 'shared/components/Icon'
import { Skeleton } from 'shared/components/Skeleton'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
import { classNames } from 'shared/utils/classNames'
import { getArticleDetailsIsLoading, getArticleDetailsError, getArticleDetailsData } from '../../model/selectors/articleDetailsSelectors'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { type TArticleBlock } from '../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import classes from './ArticleDetails.module.scss'

interface IArticleDetailsProps {
  id: string
  className?: string
}

const reducers: TReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails: React.FC<IArticleDetailsProps> = (props) => {
  const { className, id } = props
  const { t } = useTranslation('article-details')
  const dispatch = useAppDispatch()
  const article = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)

  useAsyncReducer({ reducers, removeAfterUnmount: true })

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(Number(id)))
    }
  }, [dispatch, id])

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
      case 'text':
        return <ArticleTextBlock key={block.id} block={block} />
      case 'code':
        return <ArticleCodeBlock key={block.id} block={block} />
      case 'image':
        return <ArticleImageBlock key={block.id} block={block} />
      default:
        return null
    }
  }, [])

  if (isLoading) {
    return (
      <div className={classNames(classes.wrapper, {}, [className])}>
        <Skeleton className={classes.avatar} width={200} height={200} borderRadius="50%" />
        <Skeleton width={300} height={40} />
        <Skeleton width={600} height={32} />
        <div className={classes.articleInfo}>
          <Skeleton width={20} height={20} borderRadius="50%" />
          <Skeleton width={100} height={24} />
        </div>
        <div className={classes.articleInfo}>
          <Skeleton width={20} height={20} borderRadius="50%" />
          <Skeleton width={150} height={24} />
        </div>
        <div className={classes.blocks}>
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
          <Skeleton width="100%" height={200} />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(classes.wrapper, {}, [className, classes.error])}>
        <Text color="error" title={t('An error occurred while loading the article')} align="center" />
      </div>
    )
  }

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <Avatar className={classes.avatar} src={article?.img} alt={article?.title} size={200} />
      <Text size="l" title={article?.title} description={article?.subtitle} />
      <div className={classes.articleInfo}>
        <Icon Svg={EyeIcon} />
        <Text description={String(article?.views)} />
      </div>
      <div className={classes.articleInfo}>
        <Icon Svg={CalendarIcon} />
        <Text description={article?.createdAt} />
      </div>
      <div className={classes.blocks}>
        {article?.blocks.map(renderBlock)}
      </div>
    </div>
  )
}
