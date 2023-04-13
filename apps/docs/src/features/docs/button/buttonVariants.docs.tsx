import { Button } from "@/components";
import { BuildElement } from "@/features/docBuilder";
import { Doc } from "@/features/documentation";
import { Box, Cluster } from "@kodiui/ui";

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
        <Cluster>
          <Button>Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Cluster>
        <Doc.CodeSnippet codeSnippet={codeSnippet} showLineNumbers={false} />
      </Doc.Example>
    </>
  );
};

export default ButtonVariants;
