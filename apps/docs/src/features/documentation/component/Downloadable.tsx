import { Text } from "@/components";
import { AdjustmentsIcon } from "@/features/configurator";
import { Box, Stack } from "@kodiui/ui";
import React from "react";
import { CodeSnippet } from "./CodeSnippet";

export const Downloadable = () => {
  return (
    <Stack gap="sm">
      <Box p="xs" borderRadius="sm" background="blue3">
        <Text icon={<AdjustmentsIcon />} color="blue11">
          You can pass argument directory to your project <br />
        </Text>
      </Box>
      <Box p="xs" borderRadius="sm" background="yellow3">
        <Text icon={<AdjustmentsIcon />} color="yellow11">
          --directory is optional 
        </Text>
      </Box>
      <CodeSnippet
        initialOpen
        codeSnippet={`npx @kodiui/cli@latest --directory <PATH_TO_PROJECT>`}
      />
    </Stack>
  );
};
