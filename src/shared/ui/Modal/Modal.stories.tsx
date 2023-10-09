import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    children: 'Это модальное окно. Здесь может быть какой-нибудь контент'
  }
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
