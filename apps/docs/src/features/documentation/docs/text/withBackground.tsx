import { Text } from "@/components";
import { Box, Cluster } from "@kodiui/ui";
import React from "react";

export const TextWithBackground = () => {
  return (
    <Cluster>
      <Box
        background="neutralSoftHover"
        color="neutral"
        p="xxs"
        px="xs"
        borderRadius="sm"
      >
        <Text>neutral</Text>
      </Box>
      <Box
        background="infoSoftHover"
        color="infoActive"
        p="xxs"
        px="xs"
        borderRadius="sm"
      >
        <Text>info</Text>
      </Box>
      <Box
        background="positiveLight"
        color="positive"
        p="xxs"
        px="xs"
        borderRadius="sm"
      >
        <Text>positive</Text>
      </Box>
      <Box
        background="criticalLight"
        color="criticalActive"
        p="xxs"
        px="xs"
        borderRadius="sm"
      >
        <Text>critical</Text>
      </Box>
    </Cluster>
  );
};
