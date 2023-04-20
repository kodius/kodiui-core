import { Doc } from "@/features/documentation/Doc";
import { Split } from "@kodiui/ui";

const SplitPage = () => {
  return (
    <Doc>
      <Doc.Title>Split</Doc.Title>

      <Doc.Block
        subTitle="Separates the passed children by splitting them apart as much as
        possible."
        exampleWithCode={
          <Split>
            <Doc.Placeholder />
            <Doc.Placeholder />
          </Split>
        }
      />
      
    </Doc>
  );
};

export default SplitPage;
