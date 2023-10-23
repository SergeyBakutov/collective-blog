import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Avatar } from './Avatar'
import ExampleImg from './example.jpg'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: ExampleImg
  }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}

export const Size100: Story = {
  args: {
    size: 200
  },
  decorators: [ThemeDecorator('light')]
}

export const Size50: Story = {
  args: {
    size: 50
  },
  decorators: [ThemeDecorator('light')]
}
