import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/components/Button'
import { Input } from 'shared/components/Input'
import { VStack } from 'shared/components/Stack'
import { classNames } from 'shared/utils/classNames'
import classes from './AddCommentForm.module.scss'

interface IAddCommentFormProps {
  className?: string
  text: string
  disabled?: boolean
  onChangeText: (value: string) => void
  onSend: () => void
}

export const AddCommentForm: React.FC<IAddCommentFormProps> = memo((props) => {
  const {
    className,
    text,
    disabled = false,
    onChangeText,
    onSend
  } = props
  const { t } = useTranslation()

  return (
    <VStack className={classNames(classes.wrapper, {}, [className])} gap="12">
      <Input
        label={t('New comment')}
        value={text}
        readonly={disabled}
        onChange={onChangeText}
      />
      <Button
        className={classes.button}
        disabled={disabled}
        color="outline"
        onClick={onSend}
      >
        {t('Send')}
      </Button>
    </VStack>
  )
})

AddCommentForm.displayName = 'AddCommentForm'
