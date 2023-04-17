import { Button } from "@/components";
import { Cluster, Stack } from "@kodiui/ui";

export const LoadingButton = () => {
  return (
    <Stack>
      <Cluster>
        <Button loading>Solid</Button>
        <Button loading variant="ghost">
          Ghost
        </Button>
        <Button loading variant="soft">
          Soft
        </Button>
        <Button loading variant="transparent">
          Transparent
        </Button>
      </Cluster>
      <Cluster>
        <Button tone="neutral" loading>
          Solid
        </Button>
        <Button tone="neutral" loading variant="ghost">
          Ghost
        </Button>
        <Button tone="neutral" loading variant="soft">
          Soft
        </Button>
        <Button tone="neutral" loading variant="transparent">
          Transparent
        </Button>
      </Cluster>
      <Cluster>
        <Button tone="critical" loading>
          Solid
        </Button>
        <Button tone="critical" loading variant="ghost">
          Ghost
        </Button>
        <Button tone="critical" loading variant="soft">
          Soft
        </Button>
        <Button tone="critical" loading variant="transparent">
          Transparent
        </Button>
      </Cluster>
      <Cluster>
        <Button tone="info" loading>
          Solid
        </Button>
        <Button tone="info" loading variant="ghost">
          Ghost
        </Button>
        <Button tone="info" loading variant="soft">
          Soft
        </Button>
        <Button tone="info" loading variant="transparent">
          Transparent
        </Button>
      </Cluster>
      <Cluster>
        <Button tone="success" loading>
          Solid
        </Button>
        <Button tone="success" loading variant="ghost">
          Ghost
        </Button>
        <Button tone="success" loading variant="soft">
          Soft
        </Button>
        <Button tone="success" loading variant="transparent">
          Transparent
        </Button>
      </Cluster>
    </Stack>
  );
};

export default LoadingButton;
