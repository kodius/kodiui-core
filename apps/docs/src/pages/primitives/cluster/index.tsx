import { Doc } from "@/features/documentation/Doc";
import { Center, Box, Cluster } from "@kodiui/ui";

const ClusterPage = () => {
  return (
    <Doc>
      <Doc.Title>Cluster</Doc.Title>

      <Doc.Block
        subTitle="Wrapping children"
        description=" Groups of 'inline' elements which can wrap when constrained by width."
        exampleWithCode={
          <Cluster>
            <Center>
              <Doc.Placeholder width={"60"} />
            </Center>
            <Center>
              <Doc.Placeholder width={"60"} />
            </Center>
            <Center>
              <Doc.Placeholder width={"60"} />
            </Center>
            <Center>
              <Doc.Placeholder width={"60"} />
            </Center>
            <Center>
              <Doc.Placeholder width={"60"} />
            </Center>
          </Cluster>
        }
      />
    </Doc>
  );
};

export default ClusterPage;
