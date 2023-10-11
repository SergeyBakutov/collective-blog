import userEvent from '@testing-library/user-event'

import { renderComponent } from 'shared/utils/tests'

import { Counter } from './Counter'

describe('Counter:', () => {
  it('should render', () => {
    const { getByTestId } = renderComponent(<Counter />, {
      initialState: {
        counter: { value: 10 }
      }
    })
    expect(getByTestId('counter-title-value')).toHaveTextContent('10')
  })

  it('should work button increment', async () => {
    const user = userEvent.setup()

    const { getByTestId } = renderComponent(<Counter />, {
      initialState: {
        counter: { value: 10 }
      }
    })
    await user.click(getByTestId('counter-button-increment'))
    expect(getByTestId('counter-title-value')).toHaveTextContent('11')
  })

  it('should work button decrement', async () => {
    const user = userEvent.setup()

    const { getByTestId } = renderComponent(<Counter />, {
      initialState: {
        counter: { value: 10 }
      }
    })
    await user.click(getByTestId('counter-button-decrement'))
    expect(getByTestId('counter-title-value')).toHaveTextContent('9')
  })
})
