import { memo } from 'react'
import { classNames } from '../../utils/classNames'
import { VStack } from '../Stack'
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
    <VStack
      className={classNames('', { [classes.readonly]: readonly }, [className])}
      fullWidth
    >
      {label && (
        <label className={classes.label} htmlFor={id}>{label}</label>
      )}
      <input
        className={classes.input}
        id={id}
        value={value}
        type={type}
        disabled={readonly}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </VStack>
  )
})

Input.displayName = 'Input'
