import { Doc } from "@/features/documentation";
import { Stack, vars } from "@kodiui/ui";
import React from "react";
import { Sprinkles } from "@kodiui/ui/dist/styles/sprinkles.css";
import { Checkbox } from "@/features/documentation/Checkboxes";
import { generateCheckboxes } from "@/features/documentation/utils";

const StackPage = () => {
  const spaceArr = Object.keys(vars.space) as Sprinkles["gap"][];
  const [checkboxes, setCheckboxes] = React.useState<
    Checkbox<Sprinkles["gap"]>[]
  >(generateCheckboxes<Sprinkles["gap"]>(spaceArr));

  // TODO: Checkboxes for Alignment

  return (
    <Doc>
      <Doc.Title>Stack</Doc.Title>
      <Doc.Example>
        <Doc.Checkboxes checkboxes={checkboxes} setCheckboxes={setCheckboxes}>
          {(checked) => {
            return (
              <Stack gap={checked?.value} alignItems="center">
                <Doc.Placeholder />
                <Doc.Placeholder />
                <Doc.Placeholder />
              </Stack>
            );
          }}
        </Doc.Checkboxes>
      </Doc.Example>
    </Doc>
  );
};

export default StackPage;
