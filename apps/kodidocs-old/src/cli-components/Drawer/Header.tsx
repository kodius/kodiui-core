import { Split } from '@kodiui/ui'
import React, { FC, PropsWithChildren } from 'react'
import { DrawerProps } from './types'
import { Heading } from '@cli-components/Heading'
import { Button } from '@cli-components/Button'

type Props = Pick<DrawerProps, 'description' | 'title' | 'onClose'>

export const Header: FC<Props> = (props) => {
  if (props.description) {
    return (
      <WithClose onClose={props.onClose}>
        <div>
          <Heading level="1">{props.title}</Heading>
          {props.description}
        </div>
      </WithClose>
    )
  }
  return (
    <WithClose onClose={props.onClose}>
      <Heading level="1">{props.title}</Heading>
    </WithClose>
  )
}

type WithCloseProps = PropsWithChildren & Pick<DrawerProps, 'onClose'>

const WithClose: FC<WithCloseProps> = (props) => {
  return (
    <Split>
      {props.children}
      <Button onClick={props.onClose} size="sm" variant="transparent" tone="neutral">
        close
      </Button>
    </Split>
  )
}
