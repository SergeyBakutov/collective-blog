import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { type TArticlesSort } from 'entities/Article'
import { type ISelectOption, Select } from 'shared/components/Select'
import { HStack } from 'shared/components/Stack'
import { type TSortOrder } from 'shared/types/sortOrder'
import { classNames } from 'shared/utils/classNames'

interface IArticlesSortProps {
  className?: string
  sort: TArticlesSort
  sortOrder: TSortOrder
  onChangeSort: (value: TArticlesSort) => void
  onChangeSortOrder: (value: TSortOrder) => void
}

export const ArticlesSort: React.FC<IArticlesSortProps> = memo((props) => {
  const { className, sort, sortOrder, onChangeSort, onChangeSortOrder } = props
  const { t } = useTranslation('articles')

  const sortOptions = useMemo<Array<ISelectOption<TArticlesSort>>>(() => ([
    { value: 'title', content: t('title') },
    { value: 'createdAt', content: t('creation date') },
    { value: 'views', content: t('number of views') }
  ]), [t])

  const orderOptions = useMemo<Array<ISelectOption<TSortOrder>>>(() => ([
    { value: 'asc', content: t('by asc') },
    { value: 'desc', content: t('by desc') }
  ]), [t])

  return (
    <HStack className={classNames('', {}, [className])} gap="20">
      <Select
        label={t('Sort by')}
        value={sort}
        options={sortOptions}
        onChange={onChangeSort}
      />
      <Select
        label={t('Order')}
        value={sortOrder}
        options={orderOptions}
        onChange={onChangeSortOrder}
      />
    </HStack>
  )
})

ArticlesSort.displayName = 'ArticlesSort'
