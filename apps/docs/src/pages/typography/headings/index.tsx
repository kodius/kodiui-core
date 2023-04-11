import { NewHeading } from "@/components/typography/Heading";
import { Doc } from "@/features/documentation";
import { Checkbox } from "@/features/documentation/Checkboxes";
import React from "react";

export type Type = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const levelCheckboxesArr: Checkbox<Type>[] = [
  {
    name: "h1",
    label: "h1",
    checked: true,
    value: "h1",
  },
  {
    name: "h2",
    label: "h2",
    checked: false,
    value: "h2",
  },
  {
    name: "h3",
    label: "h3",
    checked: false,
    value: "h3",
  },
  {
    name: "h4",
    label: "h4",
    checked: false,
    value: "h4",
  },
  {
    name: "h5",
    label: "h5",
    checked: false,
    value: "h5",
  },
  {
    name: "h6",
    label: "h6",
    checked: false,
    value: "h6",
  },
];

const HeadingsPage = () => {
  const [levelCheckboxes, setLevelCheckboxes] =
    React.useState(levelCheckboxesArr);
  return (
    <Doc>
      <Doc.Example>
        <Doc.Checkboxes
          checkboxes={levelCheckboxes}
          setCheckboxes={setLevelCheckboxes}
        >
          {(checked) => {
            if (!checked) return <NewHeading level="h1">Heading</NewHeading>;
            return <NewHeading level={checked.value}>Heading</NewHeading>;
          }}
        </Doc.Checkboxes>
      </Doc.Example>
    </Doc>
  );
};

export default HeadingsPage;
