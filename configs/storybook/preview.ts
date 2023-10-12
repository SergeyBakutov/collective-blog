import type { Preview } from '@storybook/react'

import { I18nDecorator } from 'shared/config/storybook/I18nDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'

import '../../src/app/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    RouterDecorator,
    I18nDecorator
  ]
}

export default preview
