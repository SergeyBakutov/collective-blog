import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button } from 'shared/components/Button'
import { Input } from 'shared/components/Input'
import { VStack } from 'shared/components/Stack'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { type TReducersList, useAsyncReducer } from 'shared/hooks/useAsyncReducer'
import { classNames } from 'shared/utils/classNames'
import { getAuthError } from '../../model/selectors/getAuthError/getAuthError'
import { getAuthIsLoading } from '../../model/selectors/getAuthIsLoading/getAuthIsLoading'
import { getAuthPassword } from '../../model/selectors/getAuthPassword/getAuthPassword'
import { getAuthUsername } from '../../model/selectors/getAuthUsername/getAuthUsername'
import { authByUsername } from '../../model/services/authByUsername/authByUsername'
import { authActions, authReducer } from '../../model/slice/authSlice'
import classes from './AuthForm.module.scss'

interface IAuthFormProps {
  className?: string
  onSuccessAuth: () => void
}

const reducers: TReducersList = {
  auth: authReducer
}

const AuthForm: React.FC<IAuthFormProps> = (props) => {
  const { className, onSuccessAuth } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const username = useSelector(getAuthUsername)
  const password = useSelector(getAuthPassword)
  const error = useSelector(getAuthError)
  const isLoading = useSelector(getAuthIsLoading)

  useAsyncReducer({ reducers, removeAfterUnmount: true })

  const onChangeUsername = useCallback((value: string) => {
    dispatch(authActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(authActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(authByUsername({ username, password }))
      .then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          onSuccessAuth()
        }
      }).catch(error => {
        console.log(error)
      })
  }, [dispatch, onSuccessAuth, password, username])

  return (
    <VStack className={classNames(classes.wrapper, {}, [className])} gap="16">
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
    </VStack>
  )
}

export default AuthForm
