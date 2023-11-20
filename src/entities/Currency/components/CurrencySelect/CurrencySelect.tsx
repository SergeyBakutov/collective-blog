import { useTranslation } from 'react-i18next'
import { type IListboxOption, Listbox } from 'shared/components/Listbox'
import { classNames } from 'shared/utils/classNames'
import { type ICurrency } from '../../model/types/currency'

interface ICurrcencySelectProps {
  className?: string
  value: ICurrency
  readonly?: boolean
  onChange: (value: ICurrency) => void
}

const options: Array<IListboxOption<ICurrency>> = [
  { value: 'RUB', content: 'RUB' },
  { value: 'EUR', content: 'EUR' },
  { value: 'USD', content: 'USD' }
]

export const CurrencySelect: React.FC<ICurrcencySelectProps> = (props) => {
  const {
    className,
    value,
    readonly = false,
    onChange
  } = props
  const { t } = useTranslation()

  return (
    <Listbox
      className={classNames('', {}, [className])}
      label={t('Currency')}
      value={value}
      options={options}
      readonly={readonly}
      onChange={onChange}
    />
  )
}
