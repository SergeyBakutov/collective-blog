import type { Preview } from '@storybook/react'

import { I18nDecorator } from 'shared/config/storybook/I18nDecorator'

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
    I18nDecorator
  ]
}

export default preview
