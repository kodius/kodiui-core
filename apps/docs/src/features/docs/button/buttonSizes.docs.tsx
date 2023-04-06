import { Button } from "@/components";
import { BuildElement } from "@/features/docBuilder";
import { Cluster } from "@kodiui/ui";

export const buttonSizes: BuildElement = {
  label: "Button sizes",
  example: {
    label: ["Base size", "Small size"],
    component: [
      <Cluster>
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
      </Cluster>,
    ],
  },
  codeSnippet: `<Cluster>
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
</Cluster>,`,
};
