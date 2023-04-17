import { Button } from "@/components";
import { Doc } from "@/features/documentation";
import { Stack, Cluster } from "@kodiui/ui";

const codeSnippet = `<Stack gap={checked?.value} alignItems="center">
  <Doc.Placeholder width="full" />
  <Doc.Placeholder width="full" />
  <Doc.Placeholder width="full" />
</Stack>`;

const ButtonVariants = () => {
  return (
    <>
      <Doc.Subtitle>Button Variants</Doc.Subtitle>

      <Doc.Example>
        <Stack>
          <Cluster>
            <Button>Solid</Button>
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

export default ButtonVariants;
