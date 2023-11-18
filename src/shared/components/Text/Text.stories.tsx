import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Text } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.'
  },
  decorators: [ThemeDecorator('light')]
}

export const Error: Story = {
  args: {
    color: 'error',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.'
  },
  decorators: [ThemeDecorator('light')]
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title'
  },
  decorators: [ThemeDecorator('light')]
}

export const OnlyDescription: Story = {
  args: {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.'
  },
  decorators: [ThemeDecorator('light')]
}

export const DefaultDark: Story = {
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.'
  },
  decorators: [ThemeDecorator('dark')]
}

export const ErrorDark: Story = {
  args: {
    color: 'error',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.'
  },
  decorators: [ThemeDecorator('dark')]
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title'
  },
  decorators: [ThemeDecorator('dark')]
}

export const OnlyDescriptionDark: Story = {
  args: {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.'
  },
  decorators: [ThemeDecorator('dark')]
}

export const AlignLeft: Story = {
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.',
    align: 'left'
  },
  decorators: [ThemeDecorator('light')]
}

export const AlignCenter: Story = {
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.',
    align: 'center'
  },
  decorators: [ThemeDecorator('light')]
}

export const AlignRight: Story = {
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.',
    align: 'right'
  },
  decorators: [ThemeDecorator('light')]
}

export const SizeL: Story = {
  args: {
    size: 'l',
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.'
  },
  decorators: [ThemeDecorator('light')]
}

export const SizeM: Story = {
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eveniet.'
  },
  decorators: [ThemeDecorator('light')]
}
