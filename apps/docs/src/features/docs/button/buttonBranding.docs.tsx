import { Button } from "@/components";
import { BuildElement } from "@/features/docBuilder";
import { Cluster } from "@kodiui/ui";

export const buttonBranding: BuildElement = {
  label: "Branding",
  example: {
    label: ["Brand Accent", "Neutral", "Critical", "Info", "Success"],
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
      </Cluster>,
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
      </Cluster>,
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
      </Cluster>,
    ],
  },
};
