import { classNames } from 'shared/utils/classNames'

import classes from './Input.module.scss'

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string
  value: string
  label?: string
  onChange: (value: string) => void
}

export const Input: React.FC<IInputProps> = (props) => {
  const {
    className,
    value,
    label,
    type = 'text',
    onChange,
    ...otherProps
  } = props
  const id = Math.random().toString()

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      {label && (
        <label className={classes.label} htmlFor={id}>{label}</label>
      )}
      <input id={id} value={value} type={type} onChange={onChangeHandler} {...otherProps} />
    </div>
  )
}
