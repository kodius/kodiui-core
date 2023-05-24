import { Box, BoxProps } from '@kodiui/ui'
import React, { FC, PropsWithChildren } from 'react'
import { headingRecipe, headingStyle, HeadingVariants } from './heading.css'
import classNames from 'classnames'

type HeadingLevels = '1' | '2' | '3' | '4' | '5' | '6'

type HeadingProps = {
  icon?: JSX.Element
  level: HeadingLevels
} & BoxProps &
  HeadingVariants

const levelsToHeading = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
  '5': 'h5',
  '6': 'h6',
} as const

export const Heading: FC<PropsWithChildren & HeadingProps> = (props) => {
  const recipe = headingRecipe({
    weight: props.weight,
  })

  if (props.icon) {
    return (
      <Box
        className={classNames(headingStyle, recipe)}
        as="span"
        display="flex"
        gap="sm"
        alignItems="center"
        {...props}
      >
        {props.icon}
        <Box
          className={headingRecipe({ weight: props.weight })}
          color={props.color || 'black'}
          as={levelsToHeading[props.level]}
          {...props}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  return (
    <Box
      className={recipe}
      color={props.color || 'black'}
      as={levelsToHeading[props.level]}
      {...props}
    >
      {props.children}
    </Box>
  )
}
