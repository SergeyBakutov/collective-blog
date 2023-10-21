import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

import { type IStateSchema, StoreProvider } from 'app/providers/StoreProvider'
import i18nForTests from 'shared/config/i18n/i18nForTests'

interface IRenderComponentOptions {
  initialState?: DeepPartial<IStateSchema>
}

export const renderComponent = (element: React.ReactElement, options?: IRenderComponentOptions): ReturnType<typeof render> =>
  render(
    <MemoryRouter>
      <StoreProvider initialState={options?.initialState as IStateSchema}>
        <I18nextProvider i18n={i18nForTests}>
          {element}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
