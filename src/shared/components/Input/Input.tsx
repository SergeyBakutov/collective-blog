import { memo } from 'react'

import { classNames } from 'shared/utils/classNames'

import classes from './Input.module.scss'

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
  className?: string
  value: string
  label?: string
  readonly?: boolean
  onChange: (value: string) => void
}

export const Input: React.FC<IInputProps> = memo((props) => {
  const {
    className,
    value,
    label,
    type = 'text',
    readonly = false,
    onChange,
    ...otherProps
  } = props
  const id = Math.random().toString()

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }

  return (
    <div className={classNames(classes.wrapper, { [classes.readonly]: readonly }, [className])}>
      {label && (
        <label className={classes.label} htmlFor={id}>{label}</label>
      )}
      <input
        id={id}
        value={value}
        type={type}
        disabled={readonly}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  )
})

Input.displayName = 'Input'
