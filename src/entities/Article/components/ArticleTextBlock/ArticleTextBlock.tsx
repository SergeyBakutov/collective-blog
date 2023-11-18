import { memo } from 'react'
import { Text } from 'shared/components/Text'
import { classNames } from 'shared/utils/classNames'
import { type IArticleTextBlock } from '../../model/types/article'
import classes from './ArticleTextBlock.module.scss'

interface IArticleTextBlockProps {
  className?: string
  block: IArticleTextBlock
}

export const ArticleTextBlock: React.FC<IArticleTextBlockProps> = memo((props) => {
  const { className, block } = props

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      {block.title && <Text title={block.title} />}
      <div className={classes.paragraphs}>
        {block.paragraphs.map((paragraph) => <Text key={paragraph} description={paragraph} />)}
      </div>
    </div>
  )
})

ArticleTextBlock.displayName = 'ArticleTextBlock'
