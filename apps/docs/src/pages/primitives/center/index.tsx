import { DocBuilder } from "@/features/docBuilder";
import { centerVariants } from "@/features/docs/center/centerVariants.docs";
import { Doc } from "@/features/documentation";
import { Center, Box ,} from "@kodiui/ui";

const CenterPage = () => {
  return (
    <Doc>
      <Doc.Title>Center</Doc.Title>
      <Doc.Subtitle>Horizontal</Doc.Subtitle>
      <Doc.Example>
        <Box height={"20"}>
          <Center>
            <Doc.Placeholder />
          </Center>
        </Box>
      </Doc.Example>

      <Doc.Subtitle>Vertical</Doc.Subtitle>
      <Doc.Example>
        <Box height={"20"}>
          <Center direction="vertical">
            <Doc.Placeholder />
          </Center>
        </Box>
      </Doc.Example>

      <Doc.Subtitle>Center</Doc.Subtitle>
      <Doc.Example>
        <Box height={"20"}>
          <Center direction="center">
            <Doc.Placeholder />
          </Center>
        </Box>
      </Doc.Example>
    </Doc>
  );
};

export default CenterPage;
