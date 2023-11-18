import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button:', () => {
  it('should render', () => {
    const { getByRole } = render(<Button>Click me</Button>)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should render with class "clear"', () => {
    const { getByRole } = render(<Button color="clear">Click me</Button>)
    expect(getByRole('button')).toHaveClass('clear')
  })
})
