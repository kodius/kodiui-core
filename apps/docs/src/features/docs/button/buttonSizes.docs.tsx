import { Button, Heading } from "@/components";
import { BuildElement } from "@/features/docBuilder";
import { Doc } from "@/features/documentation";
import { Cluster } from "@kodiui/ui";

const codeSnippet = `<Cluster>
<Button>Solid</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="soft">Soft</Button>
<Button variant="transparent">Transparent</Button>
</Cluster>,
<Cluster>
<Button variant="solid" size="small">
  Solid
</Button>
<Button variant="ghost" size="small">
  Ghost
</Button>
<Button variant="soft" size="small">
  Soft
</Button>
<Button variant="transparent" size="small">
  Transparent
</Button>
</Cluster>,`;

const ButtonSizes = () => {
  return (
    <>
      <Doc.Subtitle>Button sizes</Doc.Subtitle>
      <Doc.Example>
        <Doc.Description>Basic size</Doc.Description>
        <Cluster>
          <Button>Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Cluster>
        <Doc.Description> Small size</Doc.Description>
        <Cluster>
          <Button variant="solid" size="sm">
            Solid
          </Button>
          <Button variant="ghost" size="sm">
            Ghost
          </Button>
          <Button variant="soft" size="sm">
            Soft
          </Button>
          <Button variant="transparent" size="sm">
            Transparent
          </Button>
        </Cluster>
        <Doc.CodeSnippet codeSnippet={codeSnippet} showLineNumbers={false} />
      </Doc.Example>
    </>
  );
};

export default ButtonSizes;
