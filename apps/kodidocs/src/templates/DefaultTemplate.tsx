import { Divider } from '@cli-components/Divider'
import { Heading } from '@cli-components/Heading'
import { Text } from '@cli-components/Text'
import { Box, Stack } from '@kodiui/ui'
import { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title: string | null | undefined
  description?: string | null | undefined
}

export const DefaultTemplate: FC<Props> = (props) => {
  return (
    <Stack gap="xl" height="screen" overflow="auto" paddingBottom="5xxl">
      <div>
        <Box p="5xxl" paddingBottom="md">
          <Stack gap="xs">
            <Heading textTransform="uppercase" level="1">
              {props.title}
            </Heading>
            {props.description && <Text>{props.description}</Text>}
          </Stack>
        </Box>
        <Divider />
      </div>
      <Box color="white" px="5xxl">
        {props.children}
      </Box>
    </Stack>
  )
}
