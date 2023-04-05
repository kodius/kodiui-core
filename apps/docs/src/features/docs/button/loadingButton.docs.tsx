import { Button } from "@/components";
import { BuildElement } from "@/features/docBuilder";
import { Cluster } from "@kodiui/ui";

export const loadingButton: BuildElement = {
  label: "Loading",
  example: {
    component: [
      <Cluster>
        <Button loading={true}>Solid</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="transparent">Transparent</Button>
      </Cluster>,
    ],
  },
};
