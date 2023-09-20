import { useTranslation } from 'react-i18next'

import { Button } from 'shared/ui/Button'
import { classNames } from 'shared/utils/classNames'

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = (props) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const onToggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={onToggleLanguage}
    >
      {t('Language')}
    </Button>
  )
}
