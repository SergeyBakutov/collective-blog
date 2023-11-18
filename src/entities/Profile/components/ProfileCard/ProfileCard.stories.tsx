import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { type IProfile } from '../../model/types/profile'
import { ProfileCard } from './ProfileCard'

const profile: IProfile = {
  firstname: 'Ivan',
  lastname: 'Ivanov',
  age: 24,
  country: 'Russia',
  city: 'Moscow',
  currency: 'RUB',
  username: 'test',
  avatar: 'https://phonoteka.org/uploads/posts/2022-09/1663693001_1-phonoteka-org-p-muzhskie-oboi-na-telefon-vkontakte-1.jpg'
}

const meta = {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  args: {
    data: profile,
    readonly: false
  }
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}

export const Readonly: Story = {
  args: {
    readonly: true
  },
  decorators: [ThemeDecorator('light')]
}
