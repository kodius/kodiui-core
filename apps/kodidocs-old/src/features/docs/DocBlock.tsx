import { Heading } from '@cli-components/Heading'
import { Text } from '@cli-components/Text'
import { Stack } from '@kodiui/ui'
import React, { FC, PropsWithChildren, ReactNode } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { RenderExample, RenderExmapleProps } from './components/RenderExample'
import { CodeSnippet } from '@features/documentation'

interface Props extends RenderExmapleProps {
  title: string
  description: string
  exampleWithCode?: ReactNode
  children?: ReactNode
}

export const DocBlock: FC<Props> = (props) => {
  return (
    <Stack>
      <Stack gap="xxs">
        <Heading level="3">{props.title}</Heading>
        <Text>{props.description}</Text>
      </Stack>
      {props.exampleWithCode && (
        <ExampleWithCode canPlay={props.canPlay}>{props.exampleWithCode}</ExampleWithCode>
      )}
      {props.children && props.children}
    </Stack>
  )
}

type ExampleWithCodeType = PropsWithChildren & RenderExmapleProps

export const ExampleWithCode: FC<ExampleWithCodeType> = ({ children, canPlay }) => {
  const codeSnippet = reactElementToJSXString(children)
  return (
    <>
      <RenderExample canPlay={canPlay}>{children}</RenderExample>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  )
}
