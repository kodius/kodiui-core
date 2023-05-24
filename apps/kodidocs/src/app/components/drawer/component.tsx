import { DocBlock, DocPane } from '@features/docs'
import { DocPaneProps } from '@features/docs/DocPane'
import { FlexBox } from '@kodiui/ui'
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
          <FlexBox>
            <Element />
            <Element />
            <Element />
            <Element />
            <Element />
          </FlexBox>
        }
      />
    </DocTemplate>
  )
}

const Element: FC<DocPaneProps> = (props) => {
  return <DocPane {...props}>Element</DocPane>
}
