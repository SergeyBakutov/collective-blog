import { memo, useCallback } from 'react'
import CopyIcon from '../../assets/icons/copy-icon.svg'
import { classNames } from '../../utils/classNames'
import { Button } from '../Button'
import { Icon } from '../Icon'
import classes from './Code.module.scss'

interface ICodeProps {
  className?: string
  value: string
}

export const Code: React.FC<ICodeProps> = memo((props) => {
  const { className, value } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(value)
  }, [value])

  return (
    <pre className={classNames(classes.wrapper, {}, [className])} >
      <Button className={classes.copyBtn} color="clear" onClick={onCopy} >
        <Icon className={classes.copyIcon} Svg={CopyIcon} />
      </Button>
      <code>
        {value}
      </code>

    </pre>
  )
})

Code.displayName = 'Code'
