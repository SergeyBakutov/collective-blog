import { useTranslation } from 'react-i18next'

import { Button } from 'shared/components/Button'
import { classNames } from 'shared/utils/classNames'

interface ILangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = (props) => {
  const { className, short } = props
  const { t, i18n } = useTranslation()

  const onToggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      color="clearInverted"
      onClick={onToggleLanguage}
    >
      {short ? t('Language (short)') : t('Language')}
    </Button>
  )
}
