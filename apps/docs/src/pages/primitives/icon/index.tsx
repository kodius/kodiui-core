import { DocBuilder } from "@/features/docBuilder";
import { centerVariants } from "@/features/docs/center/centerVariants.docs";
import { Doc } from "@/features/documentation/Doc";
import { Center, Box } from "@kodiui/ui";

const IconPage = () => {
  return (
    <Doc>
      <Doc.Title>Icon</Doc.Title>
      <Doc.Subtitle>Horizontal</Doc.Subtitle>
      <Doc.Example>
        <Box height={"20"}>
          <Center>
            <Doc.Placeholder />
          </Center>
        </Box>
      </Doc.Example>
    </Doc>
  );
};

export default IconPage;
