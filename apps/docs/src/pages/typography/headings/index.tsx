import { Heading } from "@/components/typography/Heading";
import { Doc } from "@/features/documentation";
import React from "react";
import { levels, headingCodeSnippet } from "./const";
import { Stack } from "@kodiui/ui";

const HeadingsPage = () => {
  const [levelCheckboxes, setLevelCheckboxes] = React.useState(levels);
  return (
    <Doc>
      <Doc.Example>
        <Stack>
          {" "}
          <Doc.Checkboxes
            checkboxes={levelCheckboxes}
            setCheckboxes={setLevelCheckboxes}
          >
            {(checked) => {
              if (!checked) return <Heading level="h1">Heading</Heading>;
              return (
                <Heading
                  align={{ mobile: "right", tablet: "center" }}
                  level={checked.value}
                  as="h3"
                >
                  Heading
                </Heading>
              );
            }}
          </Doc.Checkboxes>
          <Doc.CodeSnippet codeSnippet={headingCodeSnippet} />
        </Stack>
      </Doc.Example>
    </Doc>
  );
};

export default HeadingsPage;
