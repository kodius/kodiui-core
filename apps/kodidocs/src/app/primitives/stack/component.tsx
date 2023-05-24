import { DocBlock, DocPane } from '@features/docs'
import { Stack } from '@kodiui/ui'
import { DocTemplate } from '@templates'

export const Component = () => {
  return (
    <DocTemplate install>
      <DocBlock
        title="Example"
        description="The spacing between childrens can be adjusted using the gap prop."
        exampleWithCode={
          <Stack>
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Stack>
        }
      />
      <DocBlock
        canPlay
        title="Resposive properties"
        description="You can set responsive properties as gap={{ mobile: '5xl', desktop: 'sm' }}"
        exampleWithCode={
          <Stack gap={{ mobile: 'xl', desktop: 'sm' }}>
            <DocPane>Element 1</DocPane>
            <DocPane>Element 2</DocPane>
            <DocPane>Element 3</DocPane>
          </Stack>
        }
      />
    </DocTemplate>
  )
}
