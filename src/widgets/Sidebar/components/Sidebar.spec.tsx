import { fireEvent } from '@testing-library/react'

import { renderWithTranslation } from 'shared/utils/tests'

import { Sidebar } from './Sidebar'

describe('Sidebar:', () => {
  it('should render', () => {
    const { getByTestId } = renderWithTranslation(<Sidebar />)
    expect(getByTestId('sidebar')).toBeInTheDocument()
  })

  it('should have class "collapsed"', () => {
    const { getByTestId } = renderWithTranslation(<Sidebar />)
    const collapsedButton = getByTestId('collapsed-button')
    fireEvent.click(collapsedButton)
    expect(getByTestId('sidebar')).toHaveClass('collapsed')
    fireEvent.click(collapsedButton)
    expect(getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
