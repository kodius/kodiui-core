import { Heading } from "@/components/typography/Heading";
import { Doc } from "@/features/documentation";
import React from "react";
import { Stack } from "@kodiui/ui";
import { NewText } from "@/components/typography/Text";
import { AdjustmentsIcon } from "@/features/configurator/assets/icons/AdjustmentsIcon";

const TextPage = () => {
  return (
    <Doc>
      <Doc.Example>
        <NewText tone="brand">
          <AdjustmentsIcon />
          Text
        </NewText>
      </Doc.Example>
    </Doc>
  );
};

export default TextPage;
