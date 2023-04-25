import { Badge, BadgeVariants, Ident, Text, TextLink } from '@/components'
import { Box, Cluster } from '@kodiui/ui'
import React, { FC } from 'react'
import { Navigator } from '../types'

export const NavigatorItem: FC<Navigator> = (props) => {
  const children = props.children?.map((nav) => <NavigatorItem key={nav.id} {...nav} />)

  const getTone = (): BadgeVariants => {
    switch (props.state) {
      case 'new':
        return { tone: 'success' }
      case 'dev':
        return { tone: 'info' }
      case 'todo':
        return { tone: 'critical' }
      default:
        return { tone: 'critical' }
    }
  }

  const tone = getTone()?.tone

  if (props.isParent) {
    return (
      <>
        <Text textTransform="uppercase" size="small" color="gray12">
          {props.name}
        </Text>
        {children}
      </>
    )
  }

  if (props.state === 'todo') {
    return (
      <Ident space="xs">
        <Cluster gap="xs">
          <Box cursor="not-allowed">
            <Text color="gray9">{props.name}</Text>
          </Box>
        </Cluster>
      </Ident>
    )
  }

  if (props.href) {
    return (
      <Ident space="xs">
        <Cluster gap="xs" alignItems="center">
          <Text tone="brand" weight="strong">
            <TextLink href={props.href}>{props.name}</TextLink>
          </Text>
          {props.state && (
            <Badge weight="strong" tone={tone}>
              {props.state}
            </Badge>
          )}
        </Cluster>
      </Ident>
    )
  }

  return null
}
