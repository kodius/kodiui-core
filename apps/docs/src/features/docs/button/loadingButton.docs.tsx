import { Button } from "@/components";
import { Doc } from "@/features/documentation";
import { Cluster, Stack } from "@kodiui/ui";

const codeSnippet = ` <Cluster>
<Button loading={true}>Solid</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="soft">Soft</Button>
<Button variant="transparent">Transparent</Button>
</Cluster>`;

export const LoadingButton = () => {
  return (
    <>
      <Doc.Subtitle>Loading</Doc.Subtitle>
      <Doc.Example>
        <Stack>
          <Cluster>
            <Button loading={true}>Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="transparent">Transparent</Button>
          </Cluster>

          <Doc.CodeSnippet codeSnippet={codeSnippet} showLineNumbers={false} />
        </Stack>
      </Doc.Example>
    </>
  );
};

export default LoadingButton;
