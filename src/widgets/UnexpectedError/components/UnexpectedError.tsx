import { useTranslation } from 'react-i18next'
import { Button } from 'shared/components/Button'
import { VStack } from 'shared/components/Stack'
import { classNames } from 'shared/utils/classNames'
import classes from './UnexpectedError.module.scss'

interface IUnexpectedErrorProps {
  className?: string
}

export const UnexpectedError: React.FC<IUnexpectedErrorProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  const onReload = (): void => {
    location.reload()
  }

  return (
    <VStack
      className={classNames(classes.wrapper, {}, [className])}
      alignItems="center"
      justifyContent="center"
      gap="16"
    >
      <h1>{t('Unexpected error')}</h1>
      <Button color="outline" onClick={onReload}>
        {t('Reload page')}
      </Button>
    </VStack>
  )
}
