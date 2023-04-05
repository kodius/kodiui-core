import { Button } from "@/components";
import { BuildElement } from "@/features/docBuilder";
import { Cluster } from "@kodiui/ui";

export const buttonVariants: BuildElement = {
  label: "Button Variants",
  example: {
    component: [
      <Cluster>
        <Button>Solid</Button>
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
};
