import { Doc } from "@/features/documentation/Doc";
import { Checkbox } from "@/features/documentation/component/Checkboxes";
import { Stack, vars } from "@kodiui/ui";
import React from "react";
import { Sprinkles } from "@kodiui/ui/dist/styles/sprinkles.css";
import { generateCheckboxes } from "@/features/documentation/utils";

const StackPage = () => {
  const spaceArr = Object.keys(vars.space) as Sprinkles["gap"][];
  const [gapCheckboxes, setGapCheckboxes] = React.useState<
    Checkbox<Sprinkles["gap"]>[]
  >(generateCheckboxes(spaceArr));
  const [alignCheckboxes, setAlignCheckboxes] =
    React.useState(alignCheckboxesArr);

  return (
    <Doc>
      <Doc.Title>Stack</Doc.Title>

      <Doc.Checkboxes
        checkboxes={gapCheckboxes}
        setCheckboxes={setGapCheckboxes}
      >
        {(checked) => (
          <Doc.Block
            subTitle="Gap"
            exampleWithCode={
              <Stack gap={checked?.value} alignItems="center">
                <Doc.Placeholder width="full" />
                <Doc.Placeholder width="full" />
                <Doc.Placeholder width="full" />
              </Stack>
            }
          />
        )}
      </Doc.Checkboxes>

      <Doc.Checkboxes
        checkboxes={alignCheckboxes}
        setCheckboxes={setAlignCheckboxes}
      >
        {(checked) => (
          <Doc.Block
            subTitle="Alignment"
            exampleWithCode={
              <Stack alignItems={checked?.value}>
                <Doc.Placeholder width="6/12" />
                <Doc.Placeholder width="6/12" />
                <Doc.Placeholder width="6/12" />
              </Stack>
            }
          />
        )}
      </Doc.Checkboxes>
    </Doc>
  );
};

export default StackPage;

export type Type = "flex-start" | "flex-end" | "center" | "baseline";

const alignCheckboxesArr: Checkbox<Type>[] = [
  {
    name: "flex-start",
    label: "flex-start",
    checked: true,
    value: "flex-start",
  },
  {
    name: "center",
    label: "center",
    checked: false,
    value: "center",
  },
  {
    name: "flex-end",
    label: "flex-end",
    checked: false,
    value: "flex-end",
  },
  {
    name: "baseline",
    label: "baseline",
    checked: false,
    value: "baseline",
  },
];
