import { DocBlock, DocPane } from '@features/docs'
import { DocPaneProps } from '@features/docs/DocPane'
import { Box, Split } from '@kodiui/ui'
import { DocTemplate } from '@templates'
import { FC } from 'react'

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Todo"
        description="Todo"
        exampleWithCode={
          <Split>
            <Element />
            <Element background="blue1" color="blue10" />
          </Split>
        }
      />
    </DocTemplate>
  )
}

const Element: FC<DocPaneProps> = (props) => {
  return (
    <Box __width={Math.random() * 100 + 300}>
      <DocPane {...props}>Element</DocPane>
    </Box>
  )
}
