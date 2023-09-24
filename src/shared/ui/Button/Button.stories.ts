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

export const OutlineLight: Story = {
  args: {
    color: 'outline'
  }
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
  }
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
  }
}

export const SquareSizeM: Story = {
  args: {
    color: 'backgroundInverted',
    square: true,
    size: 'm',
    children: '>'
  }
}

export const SquareSizeL: Story = {
  args: {
    color: 'backgroundInverted',
    square: true,
    size: 'l',
    children: '>'
  }
}

export const SquareSizeXL: Story = {
  args: {
    color: 'backgroundInverted',
    square: true,
    size: 'xl',
    children: '>'
  }
}

export const OutlineSizeM: Story = {
  args: {
    color: 'outline',
    size: 'm'
  }
}

export const OutlineSizeL: Story = {
  args: {
    color: 'outline',
    size: 'l'
  }
}

export const OutlineSizeXL: Story = {
  args: {
    color: 'outline',
    size: 'xl'
  }
}
