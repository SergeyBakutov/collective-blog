import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Sidebar } from './Sidebar'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [
    RouterDecorator({})
  ],
  tags: ['autodocs']
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({})]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark'), StoreDecorator({})]
}

export const WithAuth: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    user: {
      authData: {}
    }
  })]
}
