import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs']
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const CircleLight: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  },
  decorators: [ThemeDecorator('light')]
}

export const CircleDark: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  },
  decorators: [ThemeDecorator('dark')]
}

export const RectangleLight: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [ThemeDecorator('light')]
}

export const RectangleDark: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [ThemeDecorator('dark')]
}
