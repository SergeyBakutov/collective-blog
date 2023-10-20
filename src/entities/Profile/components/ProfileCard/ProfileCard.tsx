import { useTranslation } from 'react-i18next'

import { Button } from 'shared/components/Button'
import { Input } from 'shared/components/Input'
import { Text } from 'shared/components/Text'

import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'

import classes from './ProfileCard.module.scss'

interface IProfileCardProps {
  className?: string
}

export const ProfileCard: React.FC<IProfileCardProps> = (props) => {
  const { t } = useTranslation()
  const data = useSelector(getProfileData)

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Text title={t('User profile')} />
        <Button color="outline">{t('Edit')}</Button>
      </div>
      <div className={classes.info}>
        <Input value={data?.firstname ?? ''} label={t('Firstname')} onChange={() => undefined} />
        <Input value={data?.lastname ?? ''} label={t('Lastname')} onChange={() => undefined} />
      </div>
    </div>
  )
}
