import { Documentation } from "@/features/documentation";
import { Stack } from "@kodiui/ui";
import React from "react";
import { Checkboxes } from "./Checkboxes";

const StackPage = () => {
  return (
    <Documentation>
      <Documentation.Title>Stack</Documentation.Title>
      <Documentation.Example>
        <Checkboxes>
          {(checked) => {
            return (
              <Stack gap={checked?.value}>
                <Documentation.Placeholder />
                <Documentation.Placeholder />
                <Documentation.Placeholder />
              </Stack>
            );
          }}
        </Checkboxes>
      </Documentation.Example>
    </Documentation>
  );
};

export default StackPage;
