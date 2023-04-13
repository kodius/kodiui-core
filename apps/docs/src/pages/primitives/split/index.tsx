import { Doc } from "@/features/documentation";
import { Split } from "@kodiui/ui";

const SplitPage = () => {
  return (
    <Doc>
      <Doc.Title>Split</Doc.Title>
      <Doc.Subtitle>
        Separates the passed children by splitting them apart as much as
        possible.
      </Doc.Subtitle>
      <Doc.Example>
        <Split>
          <Doc.Placeholder />
          <Doc.Placeholder />
        </Split>
      </Doc.Example>
    </Doc>
  );
};

export default SplitPage;
