import { useMemo } from 'react'

import { classNames } from 'shared/utils/classNames'

import classes from './Select.module.scss'

export interface ISelectOption<T extends string> {
  value: T
  content: string
}

interface ISelectProps<T extends string> {
  className?: string
  value: T
  options: Array<ISelectOption<T>>
  label?: string
  readonly?: boolean
  onChange: (value: T) => void
}

export const Select = <T extends string>(props: ISelectProps<T>): JSX.Element => {
  const {
    className,
    value,
    label,
    options,
    readonly = false,
    onChange
  } = props

  const onChangehandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value as T)
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
