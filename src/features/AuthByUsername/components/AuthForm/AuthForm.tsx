import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { Button } from 'shared/components/Button'
import { Input } from 'shared/components/Input'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
import { classNames } from 'shared/utils/classNames'

import { getError } from '../../model/selectors/getError/getError'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { getUsername } from '../../model/selectors/getUsername/getUsername'
import { getPassword } from '../../model/selectors/getPassword/getPassword'
import { authByUsername } from '../../model/services/authByUsername/authByUsername'
import { authActions, authReducer } from '../../model/slice/authSlice'

import classes from './AuthForm.module.scss'

interface IAuthFormProps {
  className?: string
}

const reducers: TReducersList = {
  auth: authReducer
}

const AuthForm: React.FC<IAuthFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getUsername)
  const password = useSelector(getPassword)
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)

  useAsyncReducer({ reducers, removeAfterUnmount: true })

  const onChangeUsername = useCallback((value: string) => {
    dispatch(authActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(authActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(authByUsername({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <Text title={t('Authorization')} />
      {error && <Text color="error" description={t('Invalid username or password')} />}
      <Input
        value={username}
        label={t('Username')}
        onChange={onChangeUsername}
      />
      <Input
        value={password}
        label={t('Password')}
        onChange={onChangePassword}
      />
      <Button
        className={classes.loginButton}
        color="outline"
        disabled={isLoading}
        onClick={onLoginClick}
      >
        {t('Login')}
      </Button>
    </div>
  )
}

export default AuthForm
