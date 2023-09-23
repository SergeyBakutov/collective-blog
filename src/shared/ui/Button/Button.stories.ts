import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Button } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button'
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ClearLight: Story = {
  args: {
    color: 'clear'
  }
}

export const ClearDark: Story = {
  args: {
    color: 'clear'
  },
  decorators: [ThemeDecorator('dark')]
}

export const ClearInvertedLight: Story = {
  args: {
    color: 'clearInverted'
  },
  decorators: [ThemeDecorator('light', { backgroundInverted: true })]
}

export const ClearInvertedDark: Story = {
  args: {
    color: 'clearInverted'
  },
  decorators: [ThemeDecorator('dark', { backgroundInverted: true })]
}
