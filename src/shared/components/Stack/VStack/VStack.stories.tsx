/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../components/Button'
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator'
import { VStack } from './VStack'

const meta = {
  title: 'shared/VStack',
  component: VStack,
  tags: ['autodocs'],
  decorators: [ThemeDecorator('light')],
  args: {
    children: (
      <>
        <Button color="outline">Button 1</Button>
        <Button color="outline">Button 2</Button>
        <Button color="outline">Button 3</Button>
        <Button color="outline">Button 4</Button>
        <Button color="outline">Button 5</Button>
      </>
    )
  }
} satisfies Meta<typeof VStack>

export default meta
type Story = StoryObj<typeof meta>

export const Gap8: Story = {
  args: {
    gap: '8'
  }
}

export const Gap12: Story = {
  args: {
    gap: '12'
  }
}

export const Gap16: Story = {
  args: {
    gap: '16'
  }
}

export const Gap20: Story = {
  args: {
    gap: '20'
  }
}

export const Gap24: Story = {
  args: {
    gap: '24'
  }
}
