/* eslint-disable i18next/no-literal-string */
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { classNames } from 'shared/utils/classNames'

interface IArticleEditPageProps {
  className?: string
}

const ArticleEditPage: React.FC<IArticleEditPageProps> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page className={classNames('', {}, [className])}>
      {isEdit ? `Редактирование статьи с ID = ${id}` : 'Создание новой статьи '}
    </Page>
  )
}

export default ArticleEditPage
