import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Code } from './Code'

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  args: {
    value: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
  }
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
