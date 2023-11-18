import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/components/Skeleton'
import { Text } from 'shared/components/Text'
import { classNames } from 'shared/utils/classNames'
import { type IComment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import classes from './CommentList.module.scss'

interface ICommentListProps {
  className?: string
  comments?: IComment[]
  isLoading?: boolean
}

export const CommentList: React.FC<ICommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation('')

  if (isLoading) {
    return (
      <div className={classNames(classes.wrapper, {}, [className])}>
        <Skeleton height={90} width={'100%'} />
        <Skeleton height={90} width={'100%'} />
        <Skeleton height={90} width={'100%'} />
      </div>
    )
  }

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => <CommentCard key={comment.text} comment={comment} />)
        : <Text description={t('No comments')} />}
    </div>
  )
})

CommentList.displayName = 'CommentList'
