import { memo } from 'react'
import { Text } from 'shared/components/Text'
import { classNames } from 'shared/utils/classNames'
import { type IArticleImageBlock } from '../../model/types/article'
import classes from './ArticleImageBlock.module.scss'

interface IArticleImageBlockProps {
  className?: string
  block: IArticleImageBlock
}

export const ArticleImageBlock: React.FC<IArticleImageBlockProps> = memo((props) => {
  const { className, block } = props

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <img className={classes.image} src={block.src} alt={block.title} />
      {block.title && <Text description={block.title} />}
    </div>
  )
})

ArticleImageBlock.displayName = 'ArticleImageBlock'
