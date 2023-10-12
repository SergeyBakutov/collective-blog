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

export const Default: Story = {
  decorators: [ThemeDecorator('light')]
}

export const ClearLight: Story = {
  args: {
    color: 'clear'
  },
  decorators: [ThemeDecorator('light')]
}

export const ClearDark: Story = {
  args: {
    color: 'clear'
  },
  decorators: [ThemeDecorator('dark')]
}

export const OutlineLight: Story = {
  args: {
    color: 'outline'
  },
  decorators: [ThemeDecorator('light')]
}

export const OutlineDark: Story = {
  args: {
    color: 'outline'
  },
  decorators: [ThemeDecorator('dark')]
}

export const BackgroundInvertedLight: Story = {
  args: {
    color: 'backgroundInverted'
  },
  decorators: [ThemeDecorator('light')]
}

export const BackgroundInvertedDark: Story = {
  args: {
    color: 'backgroundInverted'
  },
  decorators: [ThemeDecorator('dark')]
}

export const Square: Story = {
  args: {
    color: 'backgroundInverted',
    square: true,
    children: '>'
  },
  decorators: [ThemeDecorator('light')]
}

export const SquareSizeM: Story = {
  args: {
    color: 'backgroundInverted',
    square: true,
    size: 'm',
    children: '>'
  },
  decorators: [ThemeDecorator('light')]
}

export const SquareSizeL: Story = {
  args: {
    color: 'backgroundInverted',
    square: true,
    size: 'l',
    children: '>'
  },
  decorators: [ThemeDecorator('light')]
}

export const SquareSizeXL: Story = {
  args: {
    color: 'backgroundInverted',
    square: true,
    size: 'xl',
    children: '>'
  },
  decorators: [ThemeDecorator('light')]
}

export const OutlineSizeM: Story = {
  args: {
    color: 'outline',
    size: 'm'
  },
  decorators: [ThemeDecorator('light')]
}

export const OutlineSizeL: Story = {
  args: {
    color: 'outline',
    size: 'l'
  },
  decorators: [ThemeDecorator('light')]
}

export const OutlineSizeXL: Story = {
  args: {
    color: 'outline',
    size: 'xl'
  },
  decorators: [ThemeDecorator('light')]
}
