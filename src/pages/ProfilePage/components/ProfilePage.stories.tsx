import type { Meta, StoryObj } from '@storybook/react'

import { type IProfile } from 'entities/Profile'
import AvatarExample from 'shared/assets/avatar-example.jpg'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

import ProfilePage from './ProfilePage'

const profile: IProfile = {
  firstname: 'Ivan',
  lastname: 'Ivanov',
  age: 24,
  country: 'Russia',
  city: 'Moscow',
  currency: 'RUB',
  username: 'test',
  avatar: AvatarExample
}

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs']

} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    profile: {
      formData: profile
    }
  })]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark'), StoreDecorator({
    profile: {
      formData: profile
    }
  })]
}
