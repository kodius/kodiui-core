import { Doc } from "@/features/documentation";
import { TextDropDownBasic } from "@/features/documentation/docs/textDropdown/textDropDownBasic";
import React from "react";

const TextDropdownPage = () => {
  return (
    <Doc>
      <Doc.Block
        subTitle="Text Dropdown"
        exampleWithCode={TextDropDownBasic()}
      />
    </Doc>
  );
};

export default TextDropdownPage;
