import React, { memo, useCallback } from 'react'
import { type TArticlesView } from 'entities/Article'
import { Button } from 'shared/components/Button'
import { Icon } from 'shared/components/Icon'
import { HStack } from 'shared/components/Stack'
import { classNames } from 'shared/utils/classNames'
import { viewVariants } from '../model/viewVariants'
import classes from './ArticlesViewSwitcher.module.scss'

interface IArticleViewSwitcherProps {
  className?: string
  view: TArticlesView
  onViewClick: (view: TArticlesView) => void
}

export const ArticlesViewSwitcher: React.FC<IArticleViewSwitcherProps> = memo((props) => {
  const { className, view, onViewClick } = props

  const onButtonClick = useCallback((view: TArticlesView) => () => {
    onViewClick(view)
  }, [onViewClick])

  return (
    <HStack className={classNames(classes.wrapper, {}, [className])} gap="4">
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
    </HStack>
  )
})

ArticlesViewSwitcher.displayName = 'ArticlesViewSwitcher'
