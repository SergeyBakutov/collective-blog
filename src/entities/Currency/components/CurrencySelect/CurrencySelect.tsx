import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/utils/classNames'
import { type ISelectOption, Select } from 'shared/components/Select'

import { type ICurrency } from '../../model/types/currency'

interface ICurrcencySelectProps {
  className?: string
  value: ICurrency
  readonly?: boolean
  onChange: (value: ICurrency) => void
}

const options: Array<ISelectOption<ICurrency>> = [
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

  const onChangeHandler = useCallback((value: string) => {
    onChange(value as ICurrency)
  }, [onChange])

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Currency')}
      value={value}
      options={options}
      readonly={readonly}
      onChange={onChangeHandler}
    />
  )
}
