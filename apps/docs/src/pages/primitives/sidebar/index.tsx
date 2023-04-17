import { Doc } from "@/features/documentation/Doc";
import { Sidebar } from "@kodiui/ui";

const SidebarPage = () => {
  return (
    <Doc>
      <Doc.Title>Sidebar</Doc.Title>
      <Doc.Subtitle>
        Putting something next to another thing, stacking if there isn’t room.
        Sidebar is a composite component which lays out a 2 column layout
        consisting of a smaller, content-width based sidebar and a larger
        content space which takes up the remaining available width. When the
        combined width is not possible to display inline, the second column is
        stacked instead of inline.
      </Doc.Subtitle>
      <Doc.Example>
        <Sidebar>
          <Doc.Placeholder />
        </Sidebar>
      </Doc.Example>
    </Doc>
  );
};

export default SidebarPage;
