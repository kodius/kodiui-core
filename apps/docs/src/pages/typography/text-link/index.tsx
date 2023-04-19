import { TextLink } from "@/components";
import { AdjustmentsIcon } from "@/features/configurator";
import { Doc } from "@/features/documentation/Doc";
import { Box, Cluster, Stack } from "@kodiui/ui";
import React from "react";

const TextLinkPage = () => {
  return (
    <Doc>
      <Doc.Title>TextLink</Doc.Title>
      <Doc.Example>
        <Cluster>
          <Box as="p" color="brand">
            <TextLink href="#">brand</TextLink>
          </Box>
        </Cluster>
      </Doc.Example>
      <Doc.Subtitle>Note</Doc.Subtitle>
      <Doc.Description>
        This component must be nested within a Text or Heading component.
      </Doc.Description>
      <Doc.Subtitle>Icons</Doc.Subtitle>
      <Doc.Example>
        <Stack>
          <Box as="p" color="brand">
            <TextLink icon={<AdjustmentsIcon />} href="#">
              Left side
            </TextLink>
          </Box>
          <Box as="p" color="brand">
            <TextLink side="right" icon={<AdjustmentsIcon />} href="#">
              Right side
            </TextLink>
          </Box>
        </Stack>
      </Doc.Example>
      {/*0000000000000  */}
      <Doc.Subtitle>colors</Doc.Subtitle>
      <Doc.Example>
        <Cluster>
          <Box as="p" color="brand">
            <TextLink href="#">Brand</TextLink>
          </Box>
          <Box as="p" color="brandAccent">
            <TextLink href="#">Brand accent</TextLink>
          </Box>
          <Box as="p" color="neutral">
            <TextLink href="#">Neutral</TextLink>
          </Box>
          <Box as="p" color="orange10">
            <TextLink href="#">Custom color</TextLink>
          </Box>
        </Cluster>
      </Doc.Example>
      {/*0000000000000  */}
      <Doc.Subtitle>With Background</Doc.Subtitle>
      <Doc.Example>
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
      </Doc.Example>
    </Doc>
  );
};

export default TextLinkPage;
