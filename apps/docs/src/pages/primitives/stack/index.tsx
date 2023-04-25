import { Doc } from "@/features/documentation/Doc";
import { Stack, vars } from "@kodiui/ui";
import React from "react";
import { Sprinkles } from "@kodiui/ui/dist/styles/sprinkles.css";
import { Checkbox } from "@/features/documentation/component/Checkboxes";
import { generateCheckboxes } from "@/features/documentation/utils";
import { alignCheckboxesArr } from "./consts";

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
              <Stack gap={`${checked?.value}`} alignItems="center">
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
              <Stack alignItems={`${checked?.value}`}>
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
