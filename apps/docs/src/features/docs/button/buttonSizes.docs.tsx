import { Button, Heading } from "@/components";
import { Doc } from "@/features/documentation";
import { Box, Stack, Cluster } from "@kodiui/ui";

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

export const ButtonSizes = () => {
  return (
    <Stack>
      <Box>
        <Doc.Description>Basic size</Doc.Description>
        <Cluster>
          <Button>Solid</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="transparent">Transparent</Button>
        </Cluster>
      </Box>
      <Box>
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
      </Box>
    </Stack>
  );
};

export default ButtonSizes;
