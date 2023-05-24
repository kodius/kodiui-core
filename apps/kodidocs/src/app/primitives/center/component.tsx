import { DocBlock, DocPane } from '@features/docs'
import { Box, Center } from '@kodiui/ui'
import { DocTemplate } from '@templates'

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Horizontal"
        description="Horizontly center its child elements"
        exampleWithCode={
          <Box height="80">
            <Center direction="horizontal">
              <DocPane>Element</DocPane>
            </Center>
          </Box>
        }
      />
      <DocBlock
        canPlay
        title="Vertical"
        description="Vericaly center its child elements"
        exampleWithCode={
          <Box height="80">
            <Center direction="vertical">
              <DocPane>Element</DocPane>
            </Center>
          </Box>
        }
      />
      <DocBlock
        canPlay
        title="Center"
        description="Center child elements verticaly and horizontaly"
        exampleWithCode={
          <Box height="80">
            <Center direction="center">
              <DocPane>Element</DocPane>
            </Center>
          </Box>
        }
      />
    </DocTemplate>
  )
}
