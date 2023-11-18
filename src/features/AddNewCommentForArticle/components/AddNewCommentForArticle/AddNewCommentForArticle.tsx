import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { AddCommentForm } from 'entities/Comment'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
import { classNames } from 'shared/utils/classNames'
import { getAddNewCommentForArticleError, getAddNewCommentForArticleIsLoading, getAddNewCommentForArticleText } from '../../model/selectors/addNewCommentForArticleSelectors'
import { addNewCommentForArticle } from '../../model/services/addNewCommentForArticle/addNewCommentForArticle'
import { addNewCommentForArticleActions, addNewCommentForArticleReducer } from '../../model/slice/addNewCommentForArticleSlice'
import classes from './AddNewCommentForArticle.module.scss'

interface IAddNewCommentProps {
  className?: string
  onSendNewComment?: () => void
}

const reducers: TReducersList = {
  addNewCommentForArticle: addNewCommentForArticleReducer
}

const AddNewCommentForArticle: React.FC<IAddNewCommentProps> = memo((props) => {
  const { className, onSendNewComment } = props
  const { t } = useTranslation()
  const text = useSelector(getAddNewCommentForArticleText)
  const isLoading = useSelector(getAddNewCommentForArticleIsLoading)
  const error = useSelector(getAddNewCommentForArticleError)
  const dispatch = useAppDispatch()

  useAsyncReducer({ reducers, removeAfterUnmount: true })

  const onChange = useCallback((value: string) => {
    dispatch(addNewCommentForArticleActions.setText(value))
  }, [dispatch])

  const onSendComment = useCallback(() => {
    dispatch(addNewCommentForArticle())
    onSendNewComment && onSendNewComment()
  }, [dispatch, onSendNewComment])

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <AddCommentForm text={text ?? ''} disabled={isLoading} onChangeText={onChange} onSend={onSendComment} />
      {error && <Text className={classes.error} color="error" description={t('An error occurred while sending a comment. Try again.')} />}
    </div>
  )
})

AddNewCommentForArticle.displayName = 'AddNewCommentForArticle'

export default AddNewCommentForArticle
