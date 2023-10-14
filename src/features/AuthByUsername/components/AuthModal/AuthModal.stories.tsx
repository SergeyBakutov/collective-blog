import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { AuthModal } from './AuthModal'

const meta = {
  title: 'features/AuthByUsername/AuthModal',
  component: AuthModal,
  tags: ['autodocs'],
  args: {
    isOpen: true
  }
} satisfies Meta<typeof AuthModal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
