import { Doc } from "@/features/documentation";
import { TextDropDownBasic } from "@/features/documentation/docs/textDropdown/textDropDownBasic";
import React from "react";

const TextDropdownPage = () => {
  return (
    <Doc>
      <Doc.Title>TextDropdown</Doc.Title>
      <Doc.ExampleWithCode>{TextDropDownBasic()}</Doc.ExampleWithCode>
    </Doc>
  );
};

export default TextDropdownPage;
