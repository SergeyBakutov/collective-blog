import type { Meta, StoryObj } from '@storybook/react'
import { type IProfile } from 'entities/Profile'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { EditableProfileCard } from './EditableProfileCard'

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
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs']
} satisfies Meta<typeof EditableProfileCard>

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

export const IsLoading: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    profile: {
      isLoading: true
    }
  })]
}

export const Error: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    profile: {
      error: 'Error'
    }
  })]
}

export const Editable: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    profile: {
      formData: profile,
      readonly: false
    }
  })]
}

export const WithValidateErrors: Story = {
  decorators: [ThemeDecorator('light'), StoreDecorator({
    profile: {
      formData: {
        ...profile,
        firstname: '',
        age: 0
      },
      readonly: false,
      validateErrors: ['INCORRECT_FIRSTNAME', 'INCORRECT_AGE']
    }
  })]
}
