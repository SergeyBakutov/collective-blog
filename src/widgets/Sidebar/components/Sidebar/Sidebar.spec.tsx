import { fireEvent } from '@testing-library/react'
import { renderComponent } from 'shared/utils/tests'
import { Sidebar } from './Sidebar'

describe('Sidebar:', () => {
  it('should render', () => {
    const { getByTestId } = renderComponent(<Sidebar />)
    expect(getByTestId('sidebar')).toBeInTheDocument()
  })

  it('should have class "collapsed"', () => {
    const { getByTestId } = renderComponent(<Sidebar />)
    const collapsedButton = getByTestId('collapsed-button')
    fireEvent.click(collapsedButton)
    expect(getByTestId('sidebar')).toHaveClass('collapsed')
    fireEvent.click(collapsedButton)
    expect(getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
