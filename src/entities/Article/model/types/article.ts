import { type IUser } from 'entities/User'

export type TArticleType = 'all' | 'it' | 'science' | 'economics'

type TArticleBlockType = 'text' | 'code' | 'image'

interface IArticleBlockBase {
  id: number
  type: TArticleBlockType
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: 'text'
  title?: string
  paragraphs: string[]
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: 'code'
  code: string
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: 'image'
  title: string
  src: string
}

export type TArticleBlock = IArticleTextBlock | IArticleCodeBlock | IArticleImageBlock

export interface IArticle {
  id: number
  user: IUser
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: TArticleType[]
  blocks: TArticleBlock[]
}

export type TArticlesView = 'list' | 'tile'
export type TArticlesSort = 'title' | 'views' | 'createdAt'
