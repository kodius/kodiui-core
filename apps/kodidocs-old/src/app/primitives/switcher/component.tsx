import { DocBlock, DocPane } from '@features/docs'
import { Box, Switcher } from '@kodiui/ui'
import { DocTemplate } from '@templates'

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Switcher"
        description="Todo"
        exampleWithCode={
          <Switcher>
            <Element />
            <Element />
          </Switcher>
        }
      />
    </DocTemplate>
  )
}

const Element = () => {
  return (
    <Box __width={Math.random() * 400 + 300}>
      <DocPane>Element</DocPane>
    </Box>
  )
}
