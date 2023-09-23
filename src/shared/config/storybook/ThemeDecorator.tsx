import { type StoryFn } from '@storybook/react'

import { type TTheme } from 'shared/hooks/useTheme'

interface IThemeDecoratorOptions {
  backgroundInverted?: boolean
}

export const ThemeDecorator = (theme: TTheme, options?: IThemeDecoratorOptions) =>
  // eslint-disable-next-line react/display-name
  (Story: StoryFn) => {
    let className = `app ${theme}`

    if (options?.backgroundInverted) {
      className += ' inverted'
    }

    return (
      <div className={className}>
        <Story />
      </div>
    )
  }
