import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

import AuthForm from './AuthForm'

const meta = {
  title: 'features/AuthByUsername/AuthForm',
  component: AuthForm,
  tags: ['autodocs']
} satisfies Meta<typeof AuthForm>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    auth: { username: 'admin', password: '123', isLoading: false }
  })]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark'), StoreDecorator(
    { auth: { username: 'admin', password: '123', isLoading: false } }
  )]
}

export const Error: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    auth: { username: 'qwerty', password: '111', error: 'Error', isLoading: false }
  })]
}

export const IsLoading: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    auth: { username: 'qwerty', password: '111', isLoading: true }
  })]
}
