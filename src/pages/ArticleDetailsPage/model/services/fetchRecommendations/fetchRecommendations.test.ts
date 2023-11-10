import { type IArticle } from 'entities/Article'
import { TestAsyncThunk } from 'shared/utils/tests'

import { fetchRecommendations } from './fetchRecommendations'

const articles: IArticle[] = [
  {
    id: 1,
    user: { id: 1, username: 'admin' },
    title: 'React news',
    subtitle: 'Что нового в React за 2022 год?',
    img: 'https://habrastorage.org/getpro/habr/upload_files/d4f/a46/db5/d4fa46db5c8dd0bdf0457900653dc1c7.jpeg',
    views: 1743,
    createdAt: '03.06.2022',
    type: [
      'it'
    ],
    blocks: [
      {
        id: 1,
        type: 'text',
        title: 'Заголовок этого блока',
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsam, recusandae accusantium molestias quaerat at inventore, repellendus modi nulla voluptatum illo unde sequi tenetur, odit repudiandae vero. Vitae nulla quos non cupiditate ratione commodi architecto autem perspiciatis maxime dolorem et rerum, ullam, cumque blanditiis! Beatae, possimus dolorem reprehenderit nobis hic commodi totam consectetur corporis numquam magnam accusantium in porro recusandae repellendus illo esse dolore laborum maiores natus ea reiciendis ab! Nostrum adipisci quasi nisi itaque ab voluptatum doloremque. Maiores in dolorem veniam fugiat saepe aliquid tenetur, beatae error impedit, explicabo officiis accusantium. Eveniet velit, veritatis voluptates porro expedita molestias ipsam?'
        ]
      }
    ]
  },
  {
    id: 1,
    user: { id: 1, username: 'admin' },
    title: 'React news',
    subtitle: 'Что нового в React за 2022 год?',
    img: 'https://habrastorage.org/getpro/habr/upload_files/d4f/a46/db5/d4fa46db5c8dd0bdf0457900653dc1c7.jpeg',
    views: 1743,
    createdAt: '03.06.2022',
    type: [
      'it'
    ],
    blocks: [
      {
        id: 1,
        type: 'text',
        title: 'Заголовок этого блока',
        paragraphs: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsam, recusandae accusantium molestias quaerat at inventore, repellendus modi nulla voluptatum illo unde sequi tenetur, odit repudiandae vero. Vitae nulla quos non cupiditate ratione commodi architecto autem perspiciatis maxime dolorem et rerum, ullam, cumque blanditiis! Beatae, possimus dolorem reprehenderit nobis hic commodi totam consectetur corporis numquam magnam accusantium in porro recusandae repellendus illo esse dolore laborum maiores natus ea reiciendis ab! Nostrum adipisci quasi nisi itaque ab voluptatum doloremque. Maiores in dolorem veniam fugiat saepe aliquid tenetur, beatae error impedit, explicabo officiis accusantium. Eveniet velit, veritatis voluptates porro expedita molestias ipsam?'
        ]
      }
    ]
  }
]

describe('fetchRecommendations:', () => {
  it('fulfilled', async () => {
    const thunk = new TestAsyncThunk(fetchRecommendations)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articles }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(articles)
  })

  it('rejected', async () => {
    const thunk = new TestAsyncThunk(fetchRecommendations)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('Error')
  })
})
