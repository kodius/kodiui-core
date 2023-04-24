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
      <Doc.Subtitle>Gap</Doc.Subtitle>
      <Doc.Example>
        <Doc.Checkboxes
          checkboxes={gapCheckboxes}
          setCheckboxes={setGapCheckboxes}
        >
          {(checked) => {
            const codeSnippet = `<Stack gap={${checked?.value}} alignItems="center">
                <Doc.Placeholder width="full" />
                <Doc.Placeholder width="full" />
                <Doc.Placeholder width="full" />
</Stack>`;
            return (
              <Stack gap={"xs"}>
                <Stack gap={checked?.value} alignItems="center">
                  <Doc.Placeholder width="full" />
                  <Doc.Placeholder width="full" />
                  <Doc.Placeholder width="full" />
                </Stack>
                <Doc.CodeSnippet
                  codeSnippet={codeSnippet}
                  showLineNumbers={false}
                />
              </Stack>
            );
          }}
        </Doc.Checkboxes>
      </Doc.Example>

      <Doc.Subtitle>Alignment</Doc.Subtitle>
      <Doc.Example>
        <Doc.Checkboxes
          checkboxes={alignCheckboxes}
          setCheckboxes={setAlignCheckboxes}
        >
          {(checked) => {
            const codeSnippet = `<Stack alignItems={${checked?.value}}>
             <Doc.Placeholder width="full" />
             <Doc.Placeholder width="full" />
             <Doc.Placeholder width="full" />
</Stack>`;
            return (
              <Stack gap={"xs"}>
                <Stack alignItems={checked?.value}>
                  <Doc.Placeholder width="6/12" />
                  <Doc.Placeholder width="6/12" />
                  <Doc.Placeholder width="6/12" />
                </Stack>
                <Doc.CodeSnippet
                  codeSnippet={codeSnippet}
                  showLineNumbers={false}
                />
              </Stack>
            );
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
