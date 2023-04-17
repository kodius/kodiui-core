import { Doc } from "@/features/documentation/Doc";
import { Center, Box, Cluster } from "@kodiui/ui";

const ClusterPage = () => {
  return (
    <Doc>
      <Doc.Title>Cluster</Doc.Title>
      <Doc.Subtitle>Wrapping children</Doc.Subtitle>
      <Doc.Description>
        Groups of 'inline' elements which can wrap when constrained by width.
      </Doc.Description>
      <Doc.Example>
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
      </Doc.Example>
    </Doc>
  );
};

export default ClusterPage;
