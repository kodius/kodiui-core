import { Doc } from '@/features/documentation'
import { Sidebar } from '@kodiui/ui'

const SidebarPage = () => {
  return (
    <Doc>
      <Doc.Title>Sidebar</Doc.Title>
      <Doc.Subtitle>
        Putting something next to another thing, stacking if there isn’t room. Sidebar is a
        composite component which lays out a 2 column layout consisting of a smaller, content-width
        based sidebar and a larger content space which takes up the remaining available width. When
        the combined width is not possible to display inline, the second column is stacked instead
        of inline.
      </Doc.Subtitle>
      <Doc.Example canPlay>
        <Sidebar>
          <Doc.Placeholder color="blue10" />
          <Doc.Placeholder style={{ flexBasis: 300 }} color="red10" />
        </Sidebar>
      </Doc.Example>
    </Doc>
  )
}

export default SidebarPage
