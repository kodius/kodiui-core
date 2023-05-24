import { DocBlock, DocPane } from '@features/docs'
import { DocPaneProps } from '@features/docs/DocPane'
import { Box, FlexBox } from '@kodiui/ui'
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
          <Box>
            <Element />
          </Box>
        }
      />
    </DocTemplate>
  )
}

const Element: FC<DocPaneProps> = (props) => {
  return <DocPane {...props}>Element</DocPane>
}
