import React, { memo, useCallback } from 'react'

import { type TArticlesView } from 'entities/Article'
import { Button } from 'shared/components/Button'
import { Icon } from 'shared/components/Icon'
import { classNames } from 'shared/utils/classNames'

import { viewVariants } from '../model/viewVariants'

import classes from './ArticleViewSwitcher.module.scss'

interface IArticleViewSwitcherProps {
  className?: string
  view: TArticlesView
  onViewClick: (view: TArticlesView) => void
}

export const ArticleViewSwitcher: React.FC<IArticleViewSwitcherProps> = memo((props) => {
  const { className, view, onViewClick } = props

  const onButtonClick = useCallback((view: TArticlesView) => () => {
    onViewClick(view)
  }, [onViewClick])

  return (
    <div className={classNames(classes.wrapper, {}, [className])}>
      {viewVariants.map((viewVariant) => (
        <React.Fragment key={viewVariant.view}>
          <Button
            color="clear"
            onClick={onButtonClick(viewVariant.view)}
            disabled={viewVariant.view === view}
          >
            <Icon className={classes.icon} Svg={viewVariant.Icon} />
          </Button>
        </React.Fragment>
      ))}
    </div>
  )
})

ArticleViewSwitcher.displayName = 'ArticleViewSwitcher'
