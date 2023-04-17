import { TextLink } from "@/components";
import { AdjustmentsIcon } from "@/features/configurator";
import { Doc } from "@/features/documentation/Doc";
import { Box, Cluster, Stack, Typography } from "@kodiui/ui";
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
      {/*0000000000000  */}
      <Doc.Subtitle>Sizes with icons</Doc.Subtitle>
      <Doc.Example>
        <Stack>
          <Box as="h1" color="brand">
            <TextLink icon={<AdjustmentsIcon />} href="#">
              Heading 1
            </TextLink>
          </Box>
          <Box as="h2" color="brandAccent">
            <TextLink icon={<AdjustmentsIcon />} href="#">
              Heading 2
            </TextLink>
          </Box>
          <Box as="h3" color="neutral">
            <TextLink icon={<AdjustmentsIcon />} href="#">
              Heading 3
            </TextLink>
          </Box>
          <Box as="h4" color="orange10">
            <TextLink icon={<AdjustmentsIcon />} href="#">
              Heading 4
            </TextLink>
          </Box>
          <Box as="h5" color="green10">
            <TextLink icon={<AdjustmentsIcon />} href="#">
              Heading 5
            </TextLink>
          </Box>
          <Box as="h6" color="purple10">
            <TextLink icon={<AdjustmentsIcon />} href="#">
              Heading 6
            </TextLink>
          </Box>
          <Box as="p" color="lime10">
            <TextLink icon={<AdjustmentsIcon />} href="#">
              Paragraph
            </TextLink>
          </Box>
        </Stack>
      </Doc.Example>
    </Doc>
  );
};

export default TextLinkPage;
