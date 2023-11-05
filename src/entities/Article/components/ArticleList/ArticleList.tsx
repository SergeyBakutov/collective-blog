import { memo, useCallback } from 'react'

import { classNames } from 'shared/utils/classNames'

import { type TArticlesView, type IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

import classes from './ArticleList.module.scss'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface IArticleListProps {
  className?: string
  articles: IArticle[]
  isLoading?: boolean
  view?: TArticlesView
}

const getSkeletons = (view: TArticlesView): JSX.Element[] => (
  new Array(view === 'tile' ? 15 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton key={index} view={view} />)
)

export const ArticleList: React.FC<IArticleListProps> = memo((props) => {
  const {
    className,
    articles,
    isLoading = false,
    view = 'tile'
  } = props

  const renderArticle = useCallback((article: IArticle) => {
    return <ArticleListItem key={article.id} article={article} view={view} />
  }, [view])

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className, classes[view]])}>
        {getSkeletons(view)}
      </div>
    )
  }

  return (
    <div className={classNames('', {}, [className, classes[view]])}>
      {articles.length
        ? articles.map(renderArticle)
        : null}
    </div>
  )
})

ArticleList.displayName = 'ArticleList'
