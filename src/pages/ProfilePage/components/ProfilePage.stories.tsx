import type { Meta, StoryObj } from '@storybook/react'
import { type IProfile } from 'entities/Profile'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import ProfilePage from './ProfilePage'

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
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  decorators: [
    RouterDecorator({}),
    StoreDecorator({
      profile: {
        formData: profile
      }
    })
  ]
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [ThemeDecorator('light')]
}

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')]
}
