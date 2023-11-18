import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator'
import { Card } from './Card'

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus quia dolor? Pariatur quaerat aperiam accusamus neque dolorum hic assumenda quibusdam ea asperiores. Esse nesciunt aperiam, aliquid fuga et, a aspernatur consequatur ducimus aut iusto earum soluta deserunt molestias beatae id, vel magnam praesentium maxime animi? Quidem dolores commodi eius.'
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
