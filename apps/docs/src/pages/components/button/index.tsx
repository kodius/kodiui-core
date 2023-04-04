import { Button, Text } from "@/components";
import { PageTemplate } from "@/templates";
import { Box, Cluster, Stack } from "@kodiui/ui";
import React from "react";

const ButtonPage = () => {
  return (
    <PageTemplate
      title="Button"
      build={() => [
        {
          label: "Folder structure",
          example: (
            <Text.Base>
              src/components/inputs/Button <br />
              - Button.tsx <br />- button.css.ts
            </Text.Base>
          ),
        },
        {
          label: "Button",
          example: (
            <Cluster>
              <Button variant="solid">Solid</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="transparent">Transparent</Button>
            </Cluster>
          ),
        },
        {
          label: "Button sizes",
          example: (
            <Stack>
              <Stack gap="xxs">
                <Text.Base>Standard size</Text.Base>
                <Cluster>
                  <Button variant="solid">Solid</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="soft">Soft</Button>
                  <Button variant="transparent">Transparent</Button>
                </Cluster>
              </Stack>
              <Stack gap="xxs">
                <Text.Base>Small size</Text.Base>
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
                </Cluster>
              </Stack>
            </Stack>
          ),
        },
      ]}
    />
  );
};

export default ButtonPage;
