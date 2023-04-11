import { DocBuilder } from "@/features/docBuilder";
import { centerVariants } from "@/features/docs/center/centerVariants.docs";
import { Doc } from "@/features/documentation";
import { Center, Box, Cluster } from "@kodiui/ui";

const ClusterPage = () => {
  return (
    <Doc>
      <Doc.Title>Cluster</Doc.Title>
      <Doc.Subtitle>Wrapping children</Doc.Subtitle>
      <Doc.Example>
        <Cluster height={"20"}>
          <Center>
            <Doc.Placeholder />
          </Center>
          <Center>
            <Doc.Placeholder />
          </Center>
          <Center>
            <Doc.Placeholder />
          </Center>
          <Center>
            <Doc.Placeholder />
          </Center>
          <Center>
            <Doc.Placeholder />
          </Center>
        </Cluster>
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

export default ClusterPage;
