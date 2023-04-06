import { Button } from "@/components";
import { BuildElement } from "@/features/docBuilder";
import { Cluster } from "@kodiui/ui";

export const buttonBranding: BuildElement = {
  label: "Branding",
  example: {
    component: [
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
      </Cluster>,
    ],
  },
};
