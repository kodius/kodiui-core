import { Button } from "@/components";
import { BuildElement } from "@/features/docBuilder";
import { Cluster } from "@kodiui/ui";

export const buttonBranding: BuildElement = {
  label: "Branding",
  example: {
    label: ["Brand Accent", "Neutral"],
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
      </Cluster>,
    ],
  },
};
