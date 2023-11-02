import { memo } from 'react'

import { AppLink } from 'shared/components/AppLink'
import { Avatar } from 'shared/components/Avatar'
import { Text } from 'shared/components/Text'
import { APP_ROUTES } from 'shared/router'
import { classNames } from 'shared/utils/classNames'

import { type IComment } from '../../model/types/comment'

import classes from './CommentCard.module.scss'

interface ICommentCardProps {
  className?: string
  comment: IComment
}

export const CommentCard: React.FC<ICommentCardProps> = memo((props) => {
  const { className, comment } = props

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <AppLink to={`${APP_ROUTES.profile}${comment.user.id}`} className={classes.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment.user.username} />
      </AppLink>
      <Text description={comment.text} />
    </div>
  )
})

CommentCard.displayName = 'CommentCard'
