import { useMemo } from 'react'

import { classNames } from 'shared/utils/classNames'

import classes from './Select.module.scss'

export interface ISelectOption<V = string> {
  value: V
  content: string
}

interface ISelectProps {
  className?: string
  value: string
  options: ISelectOption[]
  label?: string
  readonly?: boolean
  onChange: (value: string) => void
}

export const Select: React.FC<ISelectProps> = (props) => {
  const {
    className,
    value,
    label,
    options,
    readonly = false,
    onChange
  } = props

  const onChangehandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value)
  }

  const optionList = useMemo(() => {
    return options.map((option) => <option key={option.value} value={option.value}>{option.content}</option>)
  }, [options])

  return (
    <div className={classNames(classes.wrapper, { [classes.readonly]: readonly }, [className])}>
      {label && (
        <label>{label}</label>
      )}
      <select
        className={classes.select}
        value={value}
        disabled={readonly}
        onChange={onChangehandler}
      >
        {optionList}
      </select>
    </div>
  )
}
