import { DocBlock, DocPane } from '@features/docs'
import { Box, Cluster, Sidebar } from '@kodiui/ui'
import { DocTemplate } from '@templates'
import { SearchIcon } from 'lucide-react'

export const Component = () => {
  return (
    <DocTemplate>
      <DocBlock
        canPlay
        title="Left Side"
        description="Todo"
        exampleWithCode={
          <Sidebar>
            <DocPane background="blue1" color="blue10">
              Element
            </DocPane>
            <Box __flexBasis={500}>
              <DocPane>Side Left</DocPane>
            </Box>
          </Sidebar>
        }
      />
      <DocBlock
        canPlay
        title="Right Side"
        description="Todo"
        exampleWithCode={
          <Sidebar side="right">
            <Box __flexBasis={500}>
              <DocPane>Side Right</DocPane>
            </Box>
            <DocPane background="blue1" color="blue10">
              Element
            </DocPane>
          </Sidebar>
        }
      />
      <DocBlock
        canPlay
        title="In practice"
        description="Todo"
        exampleWithCode={
          <Sidebar gap="0" side="right">
            <Box __flexBasis={500}>
              <DocPane textAlign={'right'}>
                <Cluster justifyContent="flex-start" width="full">
                  <SearchIcon />
                </Cluster>
              </DocPane>
            </Box>
            <DocPane width="32" background="blue1" color="blue10">
              Search
            </DocPane>
          </Sidebar>
        }
      />
    </DocTemplate>
  )
}
