import type { Meta, StoryObj } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Navbar } from './Navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [
    RouterDecorator({})
  ],
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
