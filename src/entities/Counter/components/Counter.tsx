import { useDispatch, useSelector } from 'react-redux'

import { Button } from 'shared/components/Button'

import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter: React.FC = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="counter-title-value">{counterValue}</h1>
      <Button data-testid="counter-button-increment" color="outline" onClick={increment}>+</Button>
      <Button data-testid="counter-button-decrement" color="outline" onClick={decrement}>-</Button>
    </div>
  )
}
