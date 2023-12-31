import { useTranslation } from 'react-i18next'
import { type IListboxOption, Listbox } from 'shared/components/Listbox'
import { classNames } from 'shared/utils/classNames'
import { type ICountry } from '../../model/types/country'

interface ICountrySelectProps {
  className?: string
  value: ICountry
  readonly?: boolean
  onChange: (value: ICountry) => void
}

const options: Array<IListboxOption<ICountry>> = [
  { value: 'Russia', content: 'Russia' },
  { value: 'Belarus', content: 'Belarus' },
  { value: 'Kazakhstan', content: 'Kazakhstan' }
]

export const CountrySelect: React.FC<ICountrySelectProps> = (props) => {
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
      label={t('Country')}
      value={value}
      options={options}
      readonly={readonly}
      onChange={onChange}
    />
  )
}
