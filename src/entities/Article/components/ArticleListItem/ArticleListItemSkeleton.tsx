import { memo } from 'react'

import { Card } from 'shared/components/Card'
import { Skeleton } from 'shared/components/Skeleton'
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
          <div className={classes.header}>
            <div className={classes.userInfo}>
              <Skeleton width={30} height={30} borderRadius={'50%'} />
              <Skeleton width={50} height={24} />
            </div>
            <Skeleton width={100} height={24} />
          </div>
          <Skeleton className={classes.title} width={300} height={32} />
          <Skeleton className={classes.types} width={110} height={24} />

          <Skeleton className={classes.image} height={250} />
          <Skeleton className={classes.textBlock} width={'100%'} height={200} />
          <div className={classes.footer}>
            <Skeleton width={150} height={24} />
            {views}
          </div>
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
        <div className={classes.info}>
          {types}
          {views}
        </div>
        <Skeleton className={classes.title} width={160} height={24} />
      </Card>
    </div>
  )
})

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton'
