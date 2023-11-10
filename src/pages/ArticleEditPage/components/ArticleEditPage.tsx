/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/utils/classNames'
import { Page } from 'widgets/Page'

import classes from './ArticleEditPage.module.scss'
import { useParams } from 'react-router-dom'

interface IArticleEditPageProps {
  className?: string
}

const ArticleEditPage: React.FC<IArticleEditPageProps> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames(classes.wrapper, {}, [className])}>
      {isEdit ? `Редактирование статьи с ID = ${id}` : 'Создание новой статьи '}
    </Page>
  )
}

export default ArticleEditPage
