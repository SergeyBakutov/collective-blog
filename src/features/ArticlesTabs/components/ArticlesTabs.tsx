import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { type TArticleType } from 'entities/Article'
import { type ITabItem, Tabs } from 'shared/components/Tabs'
import { classNames } from 'shared/utils/classNames'
import classes from './ArticlesTabs.module.scss'

interface IArticlesTabsProps {
  className?: string
  type: TArticleType
  onChangeType: (type: TArticleType) => void
}

export const ArticlesTabs: React.FC<IArticlesTabsProps> = memo((props) => {
  const { className, type, onChangeType } = props
  const { t } = useTranslation('articles')

  const typeTabs = useMemo<Array<ITabItem<TArticleType>>>(() => ([
    { value: 'all', content: t('all') },
    { value: 'it', content: t('it') },
    { value: 'economics', content: t('economics') },
    { value: 'science', content: t('science') }
  ]), [t])

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      <Tabs
        tabs={typeTabs}
        value={type}
        onTabClick={onChangeType}
      />
    </div>
  )
})

ArticlesTabs.displayName = 'ArticlesTabs'
