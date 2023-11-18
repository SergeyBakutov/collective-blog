import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/components/Skeleton'
import { VStack } from 'shared/components/Stack'
import { Text } from 'shared/components/Text'
import { classNames } from 'shared/utils/classNames'
import { type IComment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

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
      <VStack className={classNames('', {}, [className])} gap="12" fullWidth>
        <Skeleton height={90} width={'100%'} />
        <Skeleton height={90} width={'100%'} />
        <Skeleton height={90} width={'100%'} />
      </VStack>
    )
  }

  return (
    <VStack className={classNames('', {}, [className])} gap="12" fullWidth>
      {comments?.length
        ? comments.map((comment) => <CommentCard key={comment.text} comment={comment} />)
        : <Text description={t('No comments')} />}
    </VStack>
  )
})

CommentList.displayName = 'CommentList'
