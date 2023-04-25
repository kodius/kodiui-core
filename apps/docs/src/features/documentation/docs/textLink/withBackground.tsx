import { TextLink } from "@/components";
import { Box, Cluster } from "@kodiui/ui";
import React from "react";

export const TextLinkWithBackground = () => {
  return (
    <Cluster>
      <Box
        as="p"
        color="brand"
        background="brandSoft"
        p="xxs"
        px="xs"
        borderRadius="sm"
      >
        <TextLink href="#">Brand</TextLink>
      </Box>
      <Box
        as="p"
        color="brandAccent"
        background="brandAccentSoft"
        p="xxs"
        px="xs"
        borderRadius="sm"
      >
        <TextLink href="#">Brand accent</TextLink>
      </Box>
      <Box
        as="p"
        color="neutral"
        background="neutralSoft"
        p="xxs"
        px="xs"
        borderRadius="sm"
      >
        <TextLink href="#">Neutral</TextLink>
      </Box>
      <Box
        as="p"
        color="orange10"
        background="orange3"
        p="xxs"
        px="xs"
        borderRadius="sm"
      >
        <TextLink href="#">Custom color</TextLink>
      </Box>
    </Cluster>
  );
};
