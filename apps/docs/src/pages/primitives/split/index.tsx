import { Doc } from "@/features/documentation/Doc";
import { Split } from "@kodiui/ui";

const SplitPage = () => {
  return (
    <Doc>
      <Doc.Title>Split</Doc.Title>
      <Doc.Description>
        Separates the passed children by splitting them apart as much as
        possible.
      </Doc.Description>
      <Doc.ExampleWithCode>
        {
          <Split>
            <Doc.Placeholder />
            <Doc.Placeholder />
          </Split>
        }
      </Doc.ExampleWithCode>
    </Doc>
  );
};

export default SplitPage;
