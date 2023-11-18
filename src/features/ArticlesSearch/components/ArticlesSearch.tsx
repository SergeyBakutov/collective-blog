import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from 'shared/components/Card'
import { Input } from 'shared/components/Input'
import { classNames } from 'shared/utils/classNames'
import classes from './ArticlesSearch.module.scss'

interface IArticlesSearchProps {
  className?: string
  search: string
  onChangeSearch: (search: string) => void
}

export const ArticlesSearch: React.FC<IArticlesSearchProps> = memo((props) => {
  const { className, search, onChangeSearch } = props
  const { t } = useTranslation('articles')

  return (
    <Card className={classNames(classes.wrapper, {}, [className])}>
      <Input
        label={t('Search')}
        value={search}
        onChange={onChangeSearch}
      />
    </Card>
  )
})

ArticlesSearch.displayName = 'ArticlesSearch'
