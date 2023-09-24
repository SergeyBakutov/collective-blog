import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { type RenderOptions, render } from '@testing-library/react'

import i18nForTests from 'shared/config/i18n/i18nForTests'

const WrapperForTest: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MemoryRouter>
      <I18nextProvider i18n={i18nForTests}>
        {children}
      </I18nextProvider>
    </MemoryRouter>
  )
}

export const renderComponent = (element: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>): ReturnType<typeof render> =>
  render(element, {
    wrapper: WrapperForTest
  })
