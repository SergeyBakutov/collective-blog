import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

import { Sidebar } from './Sidebar'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
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
