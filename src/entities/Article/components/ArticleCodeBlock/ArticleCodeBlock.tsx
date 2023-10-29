import { memo } from 'react'

import { Code } from 'shared/components/Code'
import { classNames } from 'shared/utils/classNames'

import { type IArticleCodeBlock } from '../../model/types/article'

import classes from './ArticleCodeBlock.module.scss'

interface IArticleCodeBlockProps {
  className?: string
  block: IArticleCodeBlock
}

export const ArticleCodeBlock: React.FC<IArticleCodeBlockProps> = memo((props) => {
  const { className, block } = props

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <Code value={block.code} />
    </div>
  )
})

ArticleCodeBlock.displayName = 'ArticleCodeBlock'
