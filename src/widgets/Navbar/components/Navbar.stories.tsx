import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs']
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({})]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark'), StoreDecorator({})]
}

export const Logout: Story = {
  decorators: [ThemeDecorator('dark'), StoreDecorator({
    user: { authData: { id: 1, username: '' } }
  })]
}
