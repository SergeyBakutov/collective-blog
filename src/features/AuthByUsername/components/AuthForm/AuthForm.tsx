import { useTranslation } from 'react-i18next'

import { Button } from 'shared/components/Button'
import { Input } from 'shared/components/Input'
import { classNames } from 'shared/utils/classNames'

import classes from './AuthForm.module.scss'
import { useCallback, useState } from 'react'

interface IAuthFormProps {
  className?: string
}

export const AuthForm: React.FC<IAuthFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  const [value, setValue] = useState('')

  const onChange = useCallback((newValue: string) => {
    setValue(newValue)
  }, [])

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <Input
        type="text"
        value={value}
        label={t('Username')}
        autoFocus
        onChange={onChange}
      />
      <Input
        type="text"
        value={''}
        label={t('Password')}
        onChange={() => undefined}
      />
      <Button className={classes.loginButton} color="backgroundInverted">
        {t('Login')}
      </Button>
    </div>
  )
}
