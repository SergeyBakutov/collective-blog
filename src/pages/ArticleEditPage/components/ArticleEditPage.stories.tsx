import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { APP_ROUTES } from 'shared/router'
import ArticleEditPage from './ArticleEditPage'

const meta = {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  tags: ['autodocs'],
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>

export const CreateArticleLight: Story = {
  decorators: [
    ThemeDecorator('light'),
    RouterDecorator(
      { initialEntries: ['/articles/new'] },
      APP_ROUTES.articleCreate
    )
  ]
}

export const CreateArticleDark: Story = {
  decorators: [
    ThemeDecorator('dark'),
    RouterDecorator(
      { initialEntries: ['/articles/new'] },
      APP_ROUTES.articleCreate
    )
  ]
}

export const EditArticleLight: Story = {
  decorators: [
    ThemeDecorator('light'),
    RouterDecorator(
      { initialEntries: ['/articles/1/edit'] },
      APP_ROUTES.articleEdit
    )
  ]
}

export const EditArticleDark: Story = {
  decorators: [
    ThemeDecorator('dark'),
    RouterDecorator(
      { initialEntries: ['/articles/1/edit'] },
      APP_ROUTES.articleEdit
    )
  ]
}
