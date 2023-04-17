import { Button } from "@/components";
import { Cluster, Stack } from "@kodiui/ui";


export const LoadingButton = () => {
  return (
    <Cluster>
      <Button loading={true}>Solid</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="transparent">Transparent</Button>
    </Cluster>
  );
};

export default LoadingButton;
