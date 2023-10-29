/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'

import { classNames } from 'shared/utils/classNames'

import classes from './ArticlesPage.module.scss'

interface IArticlesPageProps {
  className?: string
}

const ArticlesPage: React.FC<IArticlesPageProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      ARTICLES PAGE
    </div>
  )
}

export default memo(ArticlesPage)
