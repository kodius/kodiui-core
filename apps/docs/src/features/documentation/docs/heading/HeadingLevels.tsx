import { Heading } from "@/components";
import { Stack } from "@kodiui/ui";
import React from "react";

export const HeadingLevels = () => {
  return (
    <Stack>
      <Stack gap="xxs">
        <Heading level="1">Heading level 1 Regular</Heading>
        <Heading level="1" weight="weak">
          Heading level 1 Weak
        </Heading>
      </Stack>
      <Stack gap="xxs">
        <Heading level="2">Heading level 2 Regular</Heading>
        <Heading level="2" weight="weak">
          Heading level 2 Weak
        </Heading>
      </Stack>
      <Stack gap="xxs">
        <Heading level="3">Heading level 3 Regular</Heading>
        <Heading level="3" weight="weak">
          Heading level 3 Weak
        </Heading>
      </Stack>
      <Stack gap="xxs">
        <Heading level="4">Heading level 4 Regular</Heading>
        <Heading level="4" weight="weak">
          Heading level 4 Weak
        </Heading>
      </Stack>
    </Stack>
  );
};
