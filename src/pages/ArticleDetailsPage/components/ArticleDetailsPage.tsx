/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/utils/classNames'

import classes from './ArticleDetailsPage.module.scss'

interface IArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      ARTICLE DETAILS PAGE
    </div>
  )
}

export default memo(ArticleDetailsPage)
