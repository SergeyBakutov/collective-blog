import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { type ICountry } from 'entities/Country'
import { type ICurrency } from 'entities/Currency'
import { type IProfile, ProfileCard } from 'entities/Profile'
import { getUserAuthData } from 'entities/User'
import { Button } from 'shared/components/Button'
import { Loader } from 'shared/components/Loader'
import { Text } from 'shared/components/Text'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { classNames } from 'shared/utils/classNames'
import { getProfileData } from '../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { updateProfileData } from '../model/services/updateProfileData/updateProfileData'
import { profileActions } from '../model/slice/profileSlice'
import { type TValidateError } from '../model/types/validateError'
import classes from './EditableProfileCard.module.scss'

interface IEditableProfileCardProps {
  className?: string
}

export const EditableProfileCard: React.FC<IEditableProfileCardProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const formData = useSelector(getProfileFormData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)
  const canEdit = authData?.id === profileData?.id

  const validateErrorsWithTranslate = useMemo<Record<TValidateError, string>>(() => {
    return {
      INCORRECT_FIRSTNAME: t('Incorrect firstname'),
      INCORRECT_LASTNAME: t('Incorrect lastname'),
      INCORRECT_AGE: t('Incorrect age'),
      INCORRECT_CITY: t('Incorrect city'),
      INCORRECT_USERNAME: t('Incorrect username'),
      INCORRECT_AVATAR: t('Incorrect avatar'),
      NO_DATA: t('No profile data')
    }
  }, [t])

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  const onChangeProfileData = useCallback((field: keyof IProfile, value: string) => {
    switch (field) {
      case 'firstname':
        dispatch(profileActions.updateFormData({ firstname: value }))
        break
      case 'lastname':
        dispatch(profileActions.updateFormData({ lastname: value }))
        break
      case 'age':
        dispatch(profileActions.updateFormData({ age: Number(value) }))
        break
      case 'city':
        dispatch(profileActions.updateFormData({ city: value }))
        break
      case 'username':
        dispatch(profileActions.updateFormData({ username: value }))
        break
      case 'avatar':
        dispatch(profileActions.updateFormData({ avatar: value }))
        break
      case 'country':
        dispatch(profileActions.updateFormData({ country: value as ICountry }))
        break
      case 'currency':
        dispatch(profileActions.updateFormData({ currency: value as ICurrency }))
        break
      default:
        break
    }
  }, [dispatch])

  if (isLoading) {
    return (
      <div className={classNames(classes.wrapper, {}, [className, classes.loading])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(classes.wrapper, {}, [className, classes.error])}>
        <Text
          color="error"
          title={t('An error occurred while loading the profile')}
          description={t('Try refreshing the page')}
          align="center"
        />
      </div>
    )
  }

  return (
    <div className={classNames(classes.wrapper, { [classes.editing]: !readonly }, [className])}>
      <div className={classes.header}>
        <Text title={t('User profile')} />
        {canEdit && (
          <>
            {readonly
              ? (
                <Button color="outline" onClick={onEdit}>{t('Edit')}</Button>
              )
              : (
                <div className={classes.buttons}>
                  <Button color="backgroundInverted" onClick={onCancelEdit}>{t('Cancel')}</Button>
                  <Button color="outline" onClick={onSave}>{t('Save')}</Button>
                </div>
              )}
          </>
        )}

      </div>
      {validateErrors?.length && (
        <div className={classes.validateErrors}>
          {validateErrors.map((error) => {
            return <Text key={error} color="error" description={validateErrorsWithTranslate[error]} />
          })}
        </div>
      )}
      <ProfileCard data={formData} readonly={readonly} onChange={onChangeProfileData} />
    </div>
  )
}
