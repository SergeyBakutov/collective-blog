import { memo } from 'react'
import { VStack } from 'shared/components/Stack'
import { Text } from 'shared/components/Text'
import { classNames } from 'shared/utils/classNames'
import { type IArticleTextBlock } from '../../model/types/article'

interface IArticleTextBlockProps {
  className?: string
  block: IArticleTextBlock
}

export const ArticleTextBlock: React.FC<IArticleTextBlockProps> = memo((props) => {
  const { className, block } = props

  return (
    <VStack className={classNames('', {}, [className])} gap="12">
      {block.title && <Text title={block.title} />}
      <VStack gap="4">
        {block.paragraphs.map((paragraph) => <Text key={paragraph} description={paragraph} />)}
      </VStack>
    </VStack>
  )
})

ArticleTextBlock.displayName = 'ArticleTextBlock'
