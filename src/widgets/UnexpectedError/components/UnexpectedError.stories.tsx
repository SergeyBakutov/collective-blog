import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { UnexpectedError } from './UnexpectedError'

const meta = {
  title: 'widgets/UnexpectedError',
  component: UnexpectedError,
  tags: ['autodocs']
} satisfies Meta<typeof UnexpectedError>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
