import { type IArticle } from 'entities/Article'

import { fetchRecommendations } from '../services/fetchRecommendations/fetchRecommendations'
import { type IArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema'

import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice'

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
    id: 2,
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

describe('articleDetailsCommentsSlice:', () => {
  it('action fetchRecommendations (pending)', () => {
    const state: DeepPartial<IArticleDetailsRecommendationsSchema> = {
      isLoading: false,
      error: 'Error'
    }

    expect(articleDetailsRecommendationsReducer(state as IArticleDetailsRecommendationsSchema, fetchRecommendations.pending))
      .toEqual({
        isLoading: true,
        error: undefined
      })
  })

  it('action fetchRecommendations (fulfilled)', () => {
    const state: DeepPartial<IArticleDetailsRecommendationsSchema> = {
      ids: [],
      entities: {}
    }

    expect(
      articleDetailsRecommendationsReducer(
        state as IArticleDetailsRecommendationsSchema,
        fetchRecommendations.fulfilled(articles, '')))
      .toEqual({
        ids: [1, 2],
        entities: {
          1: articles[0],
          2: articles[1]
        },
        isLoading: false
      })
  })
})
