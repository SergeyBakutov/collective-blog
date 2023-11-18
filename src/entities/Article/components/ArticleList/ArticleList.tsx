import { type HTMLAttributeAnchorTarget, memo, useCallback } from 'react'
import { HStack, VStack } from 'shared/components/Stack'
import { classNames } from 'shared/utils/classNames'
import { type TArticlesView, type IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface IArticleListProps {
  className?: string
  articles: IArticle[]
  isLoading?: boolean
  view?: TArticlesView
  target?: HTMLAttributeAnchorTarget
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
    view = 'tile',
    target = '_self'
  } = props

  const renderArticle = useCallback((article: IArticle) => {
    return <ArticleListItem key={article.id} article={article} view={view} target={target} />
  }, [target, view])

  if (view === 'list') {
    return (
      <VStack className={classNames('', {}, [className])} gap="32">
        {articles.length
          ? articles.map(renderArticle)
          : null}
        {isLoading && getSkeletons(view)}
      </VStack>
    )
  }

  return (
    <HStack className={classNames('', {}, [className])} gap="32" wrap="wrap">
      {articles.length
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </HStack>
  )
})

ArticleList.displayName = 'ArticleList'
