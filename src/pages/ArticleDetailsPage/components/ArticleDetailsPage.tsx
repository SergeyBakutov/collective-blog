import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ArticleDetails } from 'entities/Article'
import { classNames } from 'shared/utils/classNames'

import classes from './ArticleDetailsPage.module.scss'

interface IArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article-details')

  if (!id && __PROJECT__ !== 'storybook') {
    return (
      <div className={classNames(classes.wrapper, {}, [className])}>
        {t('Article not found')}
      </div>
    )
  }

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <ArticleDetails id={id ?? '1'} />
    </div>
  )
}

export default memo(ArticleDetailsPage)
