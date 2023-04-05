import { Button, Text } from "@/components";
import { DocBuilder } from "@/features/docBuilder";
import { Box, Cluster, Stack } from "@kodiui/ui";
import React from "react";

const ButtonPage = () => {
  return (
    <DocBuilder
      title="Button"
      build={() => [
        {
          label: "Folder structure",
          example: {
            component: [
              <Text.Base>
                src/components/inputs/Button <br />
                - Button.tsx <br />- button.css.ts
              </Text.Base>,
            ],
          },
        },
        {
          label: "Button Variants",
          example: {
            component: [
              <Cluster>
                <Button variant="solid">Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Cluster>,
            ],
          },
          codeSnippet: `<Cluster>
  <Button variant="solid">Solid</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="soft">Soft</Button>
  <Button variant="transparent">Transparent</Button>
</Cluster>`,
        },

        {
          label: "Button sizes",
          example: {
            label: ["Base size", "Small size"],
            component: [
              <Cluster>
                <Button variant="solid">Solid</Button>
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
  <Button variant="solid">Solid</Button>
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
</Cluster>,`
        },
      ]}
    />
  );
};

export default ButtonPage;
