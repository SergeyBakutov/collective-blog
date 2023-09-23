import type { Preview } from '@storybook/react'

import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

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
    ThemeDecorator('light')
  ]
}

export default preview
