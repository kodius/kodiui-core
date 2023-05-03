import { Box, BoxProps } from '@kodiui/ui'
import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'
import { textRecipe, textStyle, TextVariants } from './text.css'

type TextProps = {
  icon?: JSX.Element
} & Partial<Pick<BoxProps, 'textAlign' | 'color' | 'textTransform' | 'textDecoration'>>

type Props = PropsWithChildren & TextVariants & TextProps

export const Text = React.forwardRef<HTMLElement, Props>((props, forwardRef) => {
  const recipe = textRecipe({
    size: props.size,
    tone: props.tone,
    weight: props.weight,
  })

  if (props.icon) {
    return (
      <Box
        className={classNames(textStyle, recipe)}
        as="span"
        display="flex"
        gap="xxs"
        alignItems="center"
        {...props}
      >
        {props.icon}
        <Box as="p" ref={forwardRef} {...props}>
          {props.children}
        </Box>
      </Box>
    )
  }
  return (
    <Box ref={forwardRef} className={recipe} as="p" {...props}>
      {props.children}
    </Box>
  )
})

Text.displayName = 'Text'
