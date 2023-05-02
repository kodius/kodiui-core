import React, { useState } from 'react'
import { Box, BoxProps, Center, Cluster, Stack } from '@kodiui/ui'
import { Checkboxes } from './component/Checkboxes'
import { placeholder } from './Doc.css'
import { CodeSnippet } from './component/CodeSnippet'
import { Badge, Button, Divider, Heading, Text, TextLink } from '@/components'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { Downloadable } from './component/Downloadable'
import { PlayIcon } from '@/assets/icons/PlayIcon'
import { PauseIcon } from '@/assets'
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
  dependencies?: BlockDependencies[]
  title?: string
}

type BlockDependencies = 'Radix-ui'

const Block = ({
  exampleWithCode,
  subTitle,
  description,
  canPlay,
  children,
  dependencies,
  title,
}: BlockProps) => {
  const renderDependecies = dependencies?.map((d) => (
    <TextLink key={d} href={'https://www.radix-ui.com/'}>
      <Badge tone="neutral">{d}</Badge>
    </TextLink>
  ))
  return (
    <>
      {title && dependencies && (
        <Cluster alignItems="center">
          <Title>{title}</Title>
          {renderDependecies}
        </Cluster>
      )}
      {!title && dependencies && renderDependecies}
      {title && !dependencies && <Title>{title}</Title>}
      <Stack gap={'lg'}>
        <Stack gap="xs">
          <SubTitle>{subTitle}</SubTitle>
          <Description>{description}</Description>
        </Stack>
        {exampleWithCode && <ExampleWithCode canPlay={canPlay}>{exampleWithCode}</ExampleWithCode>}
        {children}
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

interface VersionsProps {
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

interface PropsProps {
  props: Prop[]
}

const Props = (props: PropsProps) => {
  return (
    <Stack gap="3xl">
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
