import React, { FC, PropsWithChildren, ReactNode } from "react"
import reactElementToJSXString from "react-element-to-jsx-string"

import { Stack } from "@/components/primitives/stack"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

import { CodeSnippet } from "./components/CodeSnippet"
import { RenderExample, RenderExmapleProps } from "./components/RenderExample"

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
        <Text tone="muted">{props.description}</Text>
      </Stack>
      {props.exampleWithCode && (
        <ExampleWithCode canPlay={props.canPlay}>
          {props.exampleWithCode}
        </ExampleWithCode>
      )}
      {props.children && props.children}
    </Stack>
  )
}

type ExampleWithCodeType = PropsWithChildren & RenderExmapleProps

export const ExampleWithCode: FC<ExampleWithCodeType> = ({
  children,
  canPlay,
}) => {
  const codeSnippet = reactElementToJSXString(children)
  return (
    <>
      <RenderExample canPlay={canPlay}>{children}</RenderExample>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  )
}
