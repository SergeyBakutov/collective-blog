/* eslint-disable i18next/no-literal-string */
import { Listbox as HListbox } from '@headlessui/react'
import { Fragment } from 'react'
import { classNames } from '../../utils/classNames'
import classes from './Listbox.module.scss'

export interface IListboxOption<T extends string> {
  value: T
  content: string
}

interface IListboxProps<T extends string> {
  className?: string
  value: T
  options: Array<IListboxOption<T>>
  label?: string
  readonly?: boolean
  onChange: (value: T) => void
}

export const Listbox = <T extends string>(props: IListboxProps<T>): JSX.Element => {
  const {
    className,
    value,
    label,
    options,
    readonly = false,
    onChange
  } = props

  return (
    <HListbox
      as="div"
      className={classNames(classes.wrapper, { [classes.readonly]: readonly }, [className])}
      value={value}
      onChange={onChange}
      disabled={readonly}
    >
      {label && <HListbox.Label className={classes.label}>{label}</HListbox.Label>}
      <HListbox.Button
        as="button"
        className={classNames(classes.button, {}, [])}
      >
        {value}
      </HListbox.Button>
      <HListbox.Options className={classes.options}>
        {options.map((option) => (
          <HListbox.Option
            key={option.value}
            value={option.value}
            as={Fragment}
          >
            {({ active, selected }) => (
              <li
                className={classNames(classes.option, { [classes.active]: active, [classes.selected]: selected }, [])}
              >
                {option.content}
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox >
  )
}
