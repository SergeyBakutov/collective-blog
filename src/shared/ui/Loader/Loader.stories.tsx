import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Loader } from './Loader'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs']
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
