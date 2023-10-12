import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { AppLink } from './AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'AppLink'
  }
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Primary: Story = {
  args: {
    color: 'primary'
  },
  decorators: [ThemeDecorator('light')]
}

export const PrimaryDark: Story = {
  args: {
    color: 'primary'
  },
  decorators: [ThemeDecorator('dark')]
}

export const Inverted: Story = {
  args: {
    color: 'inverted'
  },
  decorators: [ThemeDecorator('light', { backgroundInverted: true })]
}

export const InvertedDark: Story = {
  args: {
    color: 'inverted'
  },
  decorators: [ThemeDecorator('dark', { backgroundInverted: true })]
}
