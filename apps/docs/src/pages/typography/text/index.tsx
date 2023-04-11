import { Heading } from "@/components/typography/Heading";
import { Doc } from "@/features/documentation";
import React from "react";
import { Stack } from "@kodiui/ui";
import { NewText } from "@/components/typography/Text";

const TextPage = () => {
  return (
    <Doc>
      <Doc.Example>
        <NewText>text</NewText>
      </Doc.Example>
    </Doc>
  );
};

export default TextPage;
