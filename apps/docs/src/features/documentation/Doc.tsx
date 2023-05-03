import React, { FC, PropsWithChildren, useState } from 'react'
import { Box, BoxProps, Center, Cluster, Stack } from '@kodiui/ui'
import { Checkboxes } from './component/Checkboxes'
import { placeholder } from './Doc.css'
import { CodeSnippet } from './component/CodeSnippet'
import { Badge, Button, Divider, Heading, Text, TextLink } from '@/components'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { Downloadable } from './component/Downloadable'
import { PlayIcon } from '@/assets/icons/PlayIcon'
import { InfoCircle, PauseIcon } from '@/assets'
import { ChangeBoxWidth } from './utils'
// eslint-disable-next-line import/no-unresolved
import { HardStyles } from '@kodiui/ui/dist/styles/hardStyle'

interface Props {
  children?: React.ReactNode
}

export const Doc = ({ children }: Props) => {
  return (
    <Box p={{ mobileExtraSmall: 'sm', tablet: '3xl' }}>
      <Box paddingTop={{ mobileExtraSmall: '0', tablet: '3xl' }} />
      <Stack gap="3xl">{children}</Stack>
    </Box>
  )
}

const Title = ({ children }: Props) => {
  return (
    <Box>
      <Heading color="blackA12" level="1">
        {children}
      </Heading>
    </Box>
  )
}

const SubTitle = ({ children }: Props) => {
  return (
    <Text color="blackA12" size="large" weight="strong">
      {children}
    </Text>
  )
}

const Description = ({ children }: Props) => {
  return (
    <Text color="blackA11" size="standard">
      {children}
    </Text>
  )
}

interface ExampleProps extends Props {
  canPlay?: boolean
}

const Example = ({ children, canPlay = false }: ExampleProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const width = ChangeBoxWidth(isPlaying)

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <Stack>
      {canPlay && (
        <Button
          width="fit"
          size="sm"
          borderRadius="xs"
          variant="transparent"
          onClick={handlePlayClick}
          background="white"
        >
          <Text icon={isPlaying ? <PauseIcon /> : <PlayIcon />}>
            {isPlaying ? 'Pause' : 'Play'}
          </Text>
        </Button>
      )}
      <Box
        background="white"
        __width={`${width}%`}
        p="md"
        borderStyle="solid"
        borderColor="gray8"
        borderWidth="md"
      >
        {children}
      </Box>
    </Stack>
  )
}

const ExampleWithCode = ({ children, canPlay }: ExampleProps) => {
  const codeSnippet = reactElementToJSXString(children)
  return (
    <>
      <Example canPlay={canPlay}>{children}</Example>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  )
}

interface BlockProps extends ExampleProps {
  subTitle?: string
  description?: string
  exampleWithCode?: React.ReactNode
  note?: string
}

const Block = ({ exampleWithCode, subTitle, description, canPlay, note }: BlockProps) => {
  return (
    <>
      <Stack gap={'lg'}>
        <Stack gap="xs">
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
          {description && <Description>{description}</Description>}
        </Stack>
        {note && <Note>{note}</Note>}
        {exampleWithCode && <ExampleWithCode canPlay={canPlay}>{exampleWithCode}</ExampleWithCode>}
      </Stack>
    </>
  )
}

interface PlaceholderProps extends Props {
  width: BoxProps['width']
  height: BoxProps['height']
}

const Placeholder = ({ children, ...props }: Partial<PlaceholderProps & HardStyles & BoxProps>) => {
  return (
    <Box
      padding="sm"
      borderWidth="sm"
      color={props.color || 'gray10'}
      borderColor="gray8"
      borderStyle="solid"
      className={placeholder}
      borderRadius="sm"
      {...props}
    >
      {children}
    </Box>
  )
}

const Pane = ({ children, ...props }: Partial<PlaceholderProps & HardStyles & BoxProps>) => {
  return (
    <Box
      padding="sm"
      borderWidth="md"
      color={'gray11'}
      borderColor="gray8"
      background="gray3"
      borderStyle="solid"
      fontSize="sm"
      style={{ fontFamily: 'monospace' }}
      {...props}
    >
      <Center direction="center">{children}</Center>
    </Box>
  )
}

const Download = () => {
  return <Downloadable />
}

interface Version {
  title: string
  version: string
  description: string
}

export interface VersionsProps {
  versions: Version[]
}

const Versions = (props: VersionsProps) => {
  return (
    <Stack gap="3xl">
      {props.versions.map((version) => {
        return (
          <Stack key={version.version}>
            <Cluster gap="xs">
              <SubTitle>{version.title}</SubTitle>
              <Badge weight="strong">{version.version}</Badge>
            </Cluster>
            <Description>{version.description}</Description>
            <Divider />
          </Stack>
        )
      })}
    </Stack>
  )
}

interface Prop {
  name: string
  values: string[]
  description?: string
}

export interface PropsProps {
  props: Prop[]
  link?: {
    href: string
    name: string
  }
}

const Props = (props: PropsProps) => {
  return (
    <Stack gap="3xl">
      {props.link && (
        <Text tone="brand">
          <TextLink target="_blank" href={props.link.href}>
            {props.link.name}
          </TextLink>
        </Text>
      )}
      {props.props.map((prop) => {
        return (
          <Stack key={prop.name}>
            <Cluster gap="xs">
              <Text weight="strong">{prop.name}: </Text>
              {prop.values.map((value) => {
                return <Text color="gray10" key={value}>{`"${value}"`}</Text>
              })}
            </Cluster>
            <Description>{prop.description}</Description>
            <Divider />
          </Stack>
        )
      })}
    </Stack>
  )
}

type Dependencies = 'Radix-ui'

interface HeaderProps {
  title: string
  description?: string
  dependsOn?: Dependencies
}

const Header = (props: HeaderProps) => {
  return (
    <Stack>
      <Cluster>
        <Title>{props.title}</Title>
        {props.dependsOn && <Badge tone="neutral">{props.dependsOn}</Badge>}
      </Cluster>
      {props.description && <Description>{props.description}</Description>}
    </Stack>
  )
}

const Note: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box p="sm" background="infoLight" borderRadius="sm" color="infoActive">
      <Text icon={<InfoCircle />} tone="info">
        {children}
      </Text>
    </Box>
  )
}

Doc.Title = Title
Doc.Subtitle = SubTitle
Doc.Description = Description
Doc.Example = Example
Doc.Placeholder = Placeholder
Doc.Checkboxes = Checkboxes
Doc.CodeSnippet = CodeSnippet
Doc.Block = Block
Doc.Pane = Pane
Doc.Download = Download
Doc.Versions = Versions
Doc.Props = Props
Doc.Header = Header
Doc.Note = Note
