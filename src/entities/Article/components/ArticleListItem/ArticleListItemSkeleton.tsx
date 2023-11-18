import { memo } from 'react'
import { Card } from 'shared/components/Card'
import { Skeleton } from 'shared/components/Skeleton'
import { HStack } from 'shared/components/Stack'
import { classNames } from 'shared/utils/classNames'
import { type TArticlesView } from '../../model/types/article'
import classes from './ArticleListItem.module.scss'

interface IArticleListItemSkeletonProps {
  className?: string
  view: TArticlesView
}

export const ArticleListItemSkeleton: React.FC<IArticleListItemSkeletonProps> = memo((props) => {
  const { className, view } = props

  const types = <Skeleton className={classes.types} width={110} height={24} />
  const views = (
    <>
      <Skeleton className={classes.views} width={35} height={24} />
      <Skeleton width={20} height={20} />
    </>
  )

  if (view === 'list') {
    return (
      <div className={classNames('', {}, [className, classes[view]])}>
        <Card>
          <HStack alignItems="center" justifyContent="spaceBetween">
            <HStack alignItems="center" gap="8">
              <Skeleton width={30} height={30} borderRadius={'50%'} />
              <Skeleton width={50} height={24} />
            </HStack>
            <Skeleton width={100} height={24} />
          </HStack>
          <Skeleton className={classes.title} width={300} height={32} />
          <Skeleton className={classes.types} width={110} height={24} />

          <Skeleton className={classes.image} height={250} />
          <Skeleton className={classes.textBlock} width={'100%'} height={200} />
          <HStack alignItems="center">
            <Skeleton width={150} height={24} />
            {views}
          </HStack>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames('', {}, [className, classes[view]])}>
      <Card>
        <div className={classes.imageWrapper}>
          <Skeleton width={200} height={200} />
        </div>
        <HStack className={classes.info} alignItems="center">
          {types}
          {views}
        </HStack>
        <Skeleton className={classes.title} width={160} height={24} />
      </Card>
    </div>
  )
})

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton'
