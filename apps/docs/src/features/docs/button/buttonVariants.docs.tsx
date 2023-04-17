import { Button } from "@/components";
import { Doc } from "@/features/documentation";
import { Cluster } from "@kodiui/ui";

export const ButtonVariants = () => {
  return (
    <Cluster>
      <Button>Solid</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="transparent">Transparent</Button>
    </Cluster>
  );
};
