/* eslint-disable @conarti/feature-sliced/layers-slices */
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { CountrySelect } from 'entities/Country'
import { CurrencySelect } from 'entities/Currency'
import { Avatar } from 'shared/components/Avatar'
import { Input } from 'shared/components/Input'
import { VStack } from 'shared/components/Stack'
import { classNames } from 'shared/utils/classNames'
import { type IProfile } from '../../model/types/profile'
import classes from './ProfileCard.module.scss'

interface IProfileCardProps {
  data?: IProfile
  readonly?: boolean
  className?: string
  onChange?: (field: keyof IProfile, value: string) => void
}

export const ProfileCard: React.FC<IProfileCardProps> = (props) => {
  const { className, data, readonly = true, onChange } = props
  const { t } = useTranslation('profile')

  const onChangeFirstname = useCallback((value: string) => {
    onChange && onChange('firstname', value)
  }, [onChange])

  const onChangeLastname = useCallback((value: string) => {
    onChange && onChange('lastname', value)
  }, [onChange])

  const onChangeAge = useCallback((value: string) => {
    const valueWithOnlyNum = value.replace(/[^\d]/g, '')
    onChange && onChange('age', valueWithOnlyNum)
  }, [onChange])

  const onChangeCity = useCallback((value: string) => {
    onChange && onChange('city', value)
  }, [onChange])

  const onChangeUsername = useCallback((value: string) => {
    onChange && onChange('username', value)
  }, [onChange])

  const onChangeAvatar = useCallback((value: string) => {
    onChange && onChange('avatar', value)
  }, [onChange])

  const onChangeCurrency = useCallback((value: string) => {
    onChange && onChange('currency', value)
  }, [onChange])

  const onChangeCountry = useCallback((value: string) => {
    onChange && onChange('country', value)
  }, [onChange])

  return (
    <VStack className={classNames('', {}, [className])} gap="12" fullWidth>
      <Avatar src={data?.avatar} className={classes.avatar} />
      <Input
        value={data?.firstname ?? ''}
        label={t('Firstname')}
        readonly={readonly}
        onChange={onChangeFirstname}
      />
      <Input
        value={data?.lastname ?? ''}
        label={t('Lastname')}
        readonly={readonly}
        onChange={onChangeLastname}
      />
      <Input
        value={String(data?.age) ?? ''}
        label={t('Age')}
        readonly={readonly}
        onChange={onChangeAge}
      />
      <CountrySelect
        value={data?.country ?? 'Russia'}
        readonly={readonly}
        onChange={onChangeCountry}
      />
      <Input
        value={data?.city ?? ''}
        label={t('City')}
        readonly={readonly}
        onChange={onChangeCity}
      />
      <CurrencySelect
        value={data?.currency ?? 'RUB'}
        readonly={readonly}
        onChange={onChangeCurrency}
      />
      <Input
        value={data?.username ?? ''}
        label={t('Username')}
        readonly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.avatar ?? ''}
        label={t('Avatar (link)')}
        readonly={readonly}
        onChange={onChangeAvatar}
      />
    </VStack>
  )
}
