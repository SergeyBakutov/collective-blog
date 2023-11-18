import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import EyeIcon from 'shared/assets/icons/eye-icon.svg'
import { AppLink } from 'shared/components/AppLink'
import { Avatar } from 'shared/components/Avatar'
import { Button } from 'shared/components/Button'
import { Card } from 'shared/components/Card'
import { Icon } from 'shared/components/Icon'
import { HStack } from 'shared/components/Stack'
import { Text } from 'shared/components/Text'
import { APP_ROUTES } from 'shared/router'
import { classNames } from 'shared/utils/classNames'
import { type TArticlesView, type IArticle, type IArticleTextBlock } from '../../model/types/article'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import classes from './ArticleListItem.module.scss'

interface IArticleListItemProps {
  className?: string
  article: IArticle
  view: TArticlesView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: React.FC<IArticleListItemProps> = memo((props) => {
  const { className, article, view, target } = props
  const { t } = useTranslation()

  const types = <Text className={classes.types} description={article.type.join(', ')} />
  const views = (
    <>
      <Text className={classes.views} description={String(article.views)} />
      <Icon Svg={EyeIcon} />
    </>
  )

  if (view === 'list') {
    const textBlock = article.blocks.find((block) => block.type === 'text')

    return (
      <div className={classNames('', {}, [className, classes[view]])}>
        <Card>
          <HStack alignItems="center" justifyContent="spaceBetween">
            <HStack alignItems="center" gap="8">
              <Avatar src={article.user.avatar} size={30} />
              <Text description={article.user.username} />
            </HStack>
            <Text description={article.createdAt} />
          </HStack>
          <Text className={classes.title} title={article.title} />
          {types}
          <img className={classes.image} src={article.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlock className={classes.textBlock} block={textBlock as IArticleTextBlock} />
          )}
          <HStack alignItems="center">
            <AppLink to={APP_ROUTES.articleDetails + article.id} target={target}>
              <Button color="outline">
                {t('Read more...')}
              </Button>
            </AppLink>
            {views}
          </HStack>
        </Card>
      </div>
    )
  }

  return (
    <AppLink
      to={APP_ROUTES.articleDetails + article.id}
      target={target}
      className={classNames('', {}, [className, classes[view]])}
    >
      <Card>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={article.img} alt={article.title} />
          <Text className={classes.date} description={article.createdAt} />
        </div>
        <HStack className={classes.info} alignItems="center">
          {types}
          {views}
        </HStack>
        <Text className={classes.title} description={article.title} />
      </Card>
    </AppLink>
  )
})

ArticleListItem.displayName = 'ArticleListItem'
