import { useTranslation } from 'react-i18next'
import { Button } from 'shared/components/Button'
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
    <div className={classNames(classes.wrapper, {}, [className])}>
      <h1>{t('Unexpected error')}</h1>
      <Button color="outline" onClick={onReload}>
        {t('Reload page')}
      </Button>
    </div>
  )
}
