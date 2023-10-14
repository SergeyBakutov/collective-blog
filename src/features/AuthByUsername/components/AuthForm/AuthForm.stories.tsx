import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { AuthForm } from './AuthForm'

const meta = {
  title: 'features/AuthByUsername/AuthForm',
  component: AuthForm,
  tags: ['autodocs']
} satisfies Meta<typeof AuthForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
