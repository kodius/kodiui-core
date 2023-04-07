import { Doc } from "@/features/documentation";
import { Stack, vars } from "@kodiui/ui";
import React from "react";
import { Sprinkles } from "@kodiui/ui/dist/styles/sprinkles.css";
import { Checkbox } from "@/features/documentation/Checkboxes";
import { generateCheckboxes } from "@/features/documentation/utils";

import { Type, alignCheckboxesArr } from "./consts";

const codeSnippet = `<Stack gap={checked?.value} alignItems="center">
  <Doc.Placeholder width="full" />
  <Doc.Placeholder width="full" />
  <Doc.Placeholder width="full" />
</Stack>`;

const StackPage = () => {
  const spaceArr = Object.keys(vars.space) as Sprinkles["gap"][];
  const [gapCheckboxes, setGapCheckboxes] = React.useState<
    Checkbox<Sprinkles["gap"]>[]
  >(generateCheckboxes(spaceArr));
  const [alignCheckboxes, setAlignCheckboxes] =
    React.useState<Checkbox<Type>[]>(alignCheckboxesArr);

  return (
    <Doc>
      <Doc.Title>Stack</Doc.Title>
      <Doc.Subtitle>Gap</Doc.Subtitle>
      <Doc.Example>
        <Doc.Checkboxes
          checkboxes={gapCheckboxes}
          setCheckboxes={setGapCheckboxes}
        >
          {(checked) => {
            return (
              <Stack gap={checked?.value} alignItems="center">
                <Doc.Placeholder width="full" />
                <Doc.Placeholder width="full" />
                <Doc.Placeholder width="full" />
              </Stack>
            );
          }}
        </Doc.Checkboxes>
        <Doc.CodeSnippet codeSnippet={codeSnippet} showLineNumbers={false} />
      </Doc.Example>
      <Doc.Subtitle>Alignment</Doc.Subtitle>
      <Doc.Example>
        <Doc.Checkboxes
          checkboxes={alignCheckboxes}
          setCheckboxes={setAlignCheckboxes}
        >
          {(checked) => {
            return (
              <Stack alignItems={checked?.value}>
                <Doc.Placeholder width="6/12" />
                <Doc.Placeholder width="6/12" />
                <Doc.Placeholder width="6/12" />
              </Stack>
            );
          }}
        </Doc.Checkboxes>
      </Doc.Example>
    </Doc>
  );
};

export default StackPage;
