import { DocBlock, DocPane } from '@features/docs'
import { Box, Center, Cluster, FlexBox } from '@kodiui/ui'
import { DocTemplate } from '@templates'

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Todo"
        description="Todo"
        exampleWithCode={
          <Cluster>
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
          </Cluster>
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
