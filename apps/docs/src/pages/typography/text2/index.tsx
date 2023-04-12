import { Text2 } from "@/components";
import { Doc } from "@/features/documentation";
import { Box, Cluster } from "@kodiui/ui";
import React from "react";
import { ReactIcon } from "../text/ReactIcon";

const Text2Page = () => {
  return (
    <Doc>
      <Doc.Title>Text2</Doc.Title>
      <Doc.Description>Sizes and weights</Doc.Description>
      <Doc.Example>
        <Text2 size="large">Text large size, regular weight</Text2>
        <Text2 size="large" weight="medium">
          Text large size, medium weight
        </Text2>
        <Text2 size="large" weight="strong">
          Text large size, strong weight
        </Text2>
        <br />
        <Text2>Text regular size, regular weight</Text2>
        <Text2 weight="medium">Text regular size, medium weight</Text2>
        <Text2 weight="strong">Text regular size, strong weight</Text2>
        <br />
        <Text2 size="small">Text small size, regular weight</Text2>
        <Text2 size="small" weight="medium">
          Text small size, medium weight
        </Text2>
        <Text2 size="small" weight="strong">
          Text small size, strong weight
        </Text2>
        <br />
        <Text2 size="xsmall">Text xsmall size, regular weight</Text2>
        <Text2 size="xsmall" weight="medium">
          Text xsmall size, medium weight
        </Text2>
        <Text2 size="xsmall" weight="strong">
          Text xsmall size, strong weight
        </Text2>
      </Doc.Example>
      <Doc.Description>Tones</Doc.Description>
      <Doc.Example>
        <Cluster>
          <Text2>Neutral</Text2>
          <Text2 tone="brand">Brand</Text2>
          <Text2 tone="brandAccent">Brand accent</Text2>
          <Text2 tone="info">Info</Text2>
          <Text2 tone="success">Success</Text2>
          <Text2 tone="critical">Critical</Text2>
          <Text2 color="orange10">Custom color</Text2>
        </Cluster>
      </Doc.Example>
      <Doc.Description>Icons</Doc.Description>
      <Doc.Example>
        <Cluster>
          <Text2 icon={<ReactIcon />}>Neutral</Text2>
          <Text2 icon={<ReactIcon />} tone="brand">
            Brand
          </Text2>
          <Text2 icon={<ReactIcon />} tone="brandAccent">
            Brand accent
          </Text2>
          <Text2 icon={<ReactIcon />} tone="info">
            Info
          </Text2>
          <Text2 icon={<ReactIcon />} tone="success">
            Success
          </Text2>
          <Text2 icon={<ReactIcon />} tone="critical">
            Critical
          </Text2>
          <Text2 icon={<ReactIcon />} color="orange10">
            Custom color
          </Text2>
        </Cluster>
      </Doc.Example>
      <Doc.Description>Alignment</Doc.Description>
      <Doc.Example>
        <Text2 textAlign="left">Left</Text2>
        <Text2 textAlign="center">Center</Text2>
        <Text2 textAlign="right">Right</Text2>
        <Doc.Description>Responsive</Doc.Description>
        <Text2
          textAlign={{ mobile: "right", tablet: "left", desktop: "center" }}
        >
          Mobile right <br /> Tablet left <br /> Desktop center
        </Text2>
      </Doc.Example>
      <Doc.Description>With background</Doc.Description>
      <Doc.Example>
        <Cluster>
          <Box
            background="neutralSoftHover"
            color="neutral"
            p="xxs"
            px="xs"
            borderRadius="sm"
          >
            <Text2>neutral</Text2>
          </Box>
          <Box
            background="infoSoftHover"
            color="infoActive"
            p="xxs"
            px="xs"
            borderRadius="sm"
          >
            <Text2>info</Text2>
          </Box>
          <Box
            background="positiveLight"
            color="positive"
            p="xxs"
            px="xs"
            borderRadius="sm"
          >
            <Text2>positive</Text2>
          </Box>
          <Box
            background="criticalLight"
            color="criticalActive"
            p="xxs"
            px="xs"
            borderRadius="sm"
          >
            <Text2>critical</Text2>
          </Box>
        </Cluster>
      </Doc.Example>
    </Doc>
  );
};

export default Text2Page;
