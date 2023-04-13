import { Button } from "@/components";
import { BuildElement } from "@/features/docBuilder";
import { Doc } from "@/features/documentation";
import { Cluster } from "@kodiui/ui";

const codeSnippet = ` <Cluster>
<Button tone="brandAccent">Solid</Button>
<Button tone="brandAccent" variant="ghost">
  Ghost
</Button>
<Button tone="brandAccent" variant="soft">
  Soft
</Button>
<Button tone="brandAccent" variant="transparent">
  Transparent
</Button>
</Cluster>

<Cluster>
<Button tone="neutral">Solid</Button>
<Button tone="neutral" variant="ghost">
  Ghost
</Button>
<Button tone="neutral" variant="soft">
  Soft
</Button>
<Button tone="neutral" variant="transparent">
  Transparent
</Button>
</Cluster>

<Cluster>
<Button tone="critical">Solid</Button>
<Button tone="critical" variant="ghost">
  Ghost
</Button>
<Button tone="critical" variant="soft">
  Soft
</Button>
<Button tone="critical" variant="transparent">
  Transparent
</Button>
</Cluster>

<Cluster>
<Button tone="info">Solid</Button>
<Button tone="info" variant="ghost">
  Ghost
</Button>
<Button tone="info" variant="soft">
  Soft
</Button>
<Button tone="info" variant="transparent">
  Transparent
</Button>
</Cluster>

<Cluster>
<Button tone="success">Solid</Button>
<Button tone="success" variant="ghost">
  Ghost
</Button>
<Button tone="success" variant="soft">
  Soft
</Button>
<Button tone="success" variant="transparent">
  Transparent
</Button>
</Cluster>`;

const ButtonBranding = () => {
  return (
    <>
      <Doc.Subtitle>Branding</Doc.Subtitle>
      <Doc.Example>
        <Doc.Description> Brand Accent</Doc.Description>
        <Cluster>
          <Button tone="brandAccent">Solid</Button>
          <Button tone="brandAccent" variant="ghost">
            Ghost
          </Button>
          <Button tone="brandAccent" variant="soft">
            Soft
          </Button>
          <Button tone="brandAccent" variant="transparent">
            Transparent
          </Button>
        </Cluster>
        <Doc.Description>Neutral</Doc.Description>

        <Cluster>
          <Button tone="neutral">Solid</Button>
          <Button tone="neutral" variant="ghost">
            Ghost
          </Button>
          <Button tone="neutral" variant="soft">
            Soft
          </Button>
          <Button tone="neutral" variant="transparent">
            Transparent
          </Button>
        </Cluster>

        <Doc.Description>Critical</Doc.Description>

        <Cluster>
          <Button tone="critical">Solid</Button>
          <Button tone="critical" variant="ghost">
            Ghost
          </Button>
          <Button tone="critical" variant="soft">
            Soft
          </Button>
          <Button tone="critical" variant="transparent">
            Transparent
          </Button>
        </Cluster>

        <Doc.Description>Info</Doc.Description>

        <Cluster>
          <Button tone="info">Solid</Button>
          <Button tone="info" variant="ghost">
            Ghost
          </Button>
          <Button tone="info" variant="soft">
            Soft
          </Button>
          <Button tone="info" variant="transparent">
            Transparent
          </Button>
        </Cluster>
        <Doc.Description>Success</Doc.Description>

        <Cluster>
          <Button tone="success">Solid</Button>
          <Button tone="success" variant="ghost">
            Ghost
          </Button>
          <Button tone="success" variant="soft">
            Soft
          </Button>
          <Button tone="success" variant="transparent">
            Transparent
          </Button>
        </Cluster>
        <Doc.CodeSnippet codeSnippet={codeSnippet} showLineNumbers={false} />
      </Doc.Example>
    </>
  );
};

export default ButtonBranding;
