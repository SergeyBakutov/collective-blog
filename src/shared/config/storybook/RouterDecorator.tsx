import { type StoryFn } from '@storybook/react'
import { MemoryRouter, Routes, type MemoryRouterProps, Route } from 'react-router-dom'

// eslint-disable-next-line react/display-name
export const RouterDecorator = (props: MemoryRouterProps, routePathForStory?: string) => (Story: StoryFn): JSX.Element => {
  return (
    <MemoryRouter {...props}>
      <Routes>
        <Route path={routePathForStory ?? '*'} element={<Story />} />
      </Routes>
    </MemoryRouter>
  )
}
