import { Doc } from "@/features/documentation/Doc";
import { FlexBox } from "@kodiui/ui";

const FlexBoxPage = () => {
  return (
    <Doc>
      <Doc.Title>FlexBox</Doc.Title>

      <Doc.Block
        subTitle="Column"
        exampleWithCode={
          <FlexBox flexDirection={"column"}>
            <Doc.Placeholder />
            <Doc.Placeholder />
          </FlexBox>
        }
      />

      <Doc.Block
        subTitle="Row"
        exampleWithCode={
          <FlexBox flexDirection={"row"}>
            <Doc.Placeholder />
            <Doc.Placeholder />
          </FlexBox>
        }
      />

      <Doc.Block
        subTitle="Column Reverse"
        exampleWithCode={
          <FlexBox flexDirection={"column-reverse"}>
            <Doc.Placeholder />
            <Doc.Placeholder />
          </FlexBox>
        }
      />

      <Doc.Block
        subTitle="Row Reverse"
        exampleWithCode={
          <FlexBox flexDirection={"row-reverse"}>
            <Doc.Placeholder />
            <Doc.Placeholder />
          </FlexBox>
        }
      />

      <Doc.Block
        subTitle="Revert Layer"
        exampleWithCode={
          <FlexBox flexDirection={"revert-layer"}>
            <Doc.Placeholder />
            <Doc.Placeholder />
          </FlexBox>
        }
      />
    </Doc>
  );
};

export default FlexBoxPage;
