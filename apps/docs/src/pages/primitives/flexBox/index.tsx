import { Doc } from "@/features/documentation/Doc";
import { FlexBox } from "@kodiui/ui";

const FlexBoxPage = () => {
  return (
    <Doc>
      <Doc.Title>FlexBox</Doc.Title>
      <Doc.Subtitle>Column</Doc.Subtitle>
      <Doc.Example>
        <FlexBox flexDirection={"column"}>
          <Doc.Placeholder />
          <Doc.Placeholder />
        </FlexBox>
      </Doc.Example>

      <Doc.Subtitle>Row</Doc.Subtitle>
      <Doc.Example>
        <FlexBox flexDirection={"row"}>
          <Doc.Placeholder />
          <Doc.Placeholder />
        </FlexBox>
      </Doc.Example>

      <Doc.Subtitle>Column Reverse</Doc.Subtitle>
      <Doc.Example>
        <FlexBox flexDirection={"column-reverse"}>
          <Doc.Placeholder />
          <Doc.Placeholder />
        </FlexBox>
      </Doc.Example>

      <Doc.Subtitle>Row Reverse</Doc.Subtitle>
      <Doc.Example>
        <FlexBox flexDirection={"row-reverse"}>
          <Doc.Placeholder />
          <Doc.Placeholder />
        </FlexBox>
      </Doc.Example>

      <Doc.Subtitle>Revert Layer</Doc.Subtitle>
      <Doc.Example>
        <FlexBox flexDirection={"revert-layer"}>
          <Doc.Placeholder />
          <Doc.Placeholder />
        </FlexBox>
      </Doc.Example>
    </Doc>
  );
};

export default FlexBoxPage;
