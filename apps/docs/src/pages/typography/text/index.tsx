import { Text } from "@/components";
import { Doc } from "@/features/documentation";
import { Box, Cluster } from "@kodiui/ui";
import React from "react";
import { ReactIcon } from "./ReactIcon";

const TextPage = () => {
  return (
    <Doc>
      <Doc.Title>Text</Doc.Title>
      <Doc.Description>Sizes and weights</Doc.Description>
      <Doc.Example>
        <Text size="large">Text large size, regular weight</Text>
        <Text size="large" weight="medium">
          Text large size, medium weight
        </Text>
        <Text size="large" weight="strong">
          Text large size, strong weight
        </Text>
        <br />
        <Text>Text regular size, regular weight</Text>
        <Text weight="medium">Text regular size, medium weight</Text>
        <Text weight="strong">Text regular size, strong weight</Text>
        <br />
        <Text size="small">Text small size, regular weight</Text>
        <Text size="small" weight="medium">
          Text small size, medium weight
        </Text>
        <Text size="small" weight="strong">
          Text small size, strong weight
        </Text>
        <br />
        <Text size="xsmall">Text xsmall size, regular weight</Text>
        <Text size="xsmall" weight="medium">
          Text xsmall size, medium weight
        </Text>
        <Text size="xsmall" weight="strong">
          Text xsmall size, strong weight
        </Text>
      </Doc.Example>
      <Doc.Description>Tones</Doc.Description>
      <Doc.Example>
        <Cluster>
          <Text>Neutral</Text>
          <Text tone="brand">Brand</Text>
          <Text tone="brandAccent">Brand accent</Text>
          <Text tone="info">Info</Text>
          <Text tone="success">Success</Text>
          <Text tone="critical">Critical</Text>
          <Text color="orange10">Custom color</Text>
        </Cluster>
      </Doc.Example>
      <Doc.Description>Icons</Doc.Description>
      <Doc.Example>
        <Cluster>
          <Text icon={<ReactIcon />}>Neutral</Text>
          <Text icon={<ReactIcon />} tone="brand">
            Brand
          </Text>
          <Text icon={<ReactIcon />} tone="brandAccent">
            Brand accent
          </Text>
          <Text icon={<ReactIcon />} tone="info">
            Info
          </Text>
          <Text icon={<ReactIcon />} tone="success">
            Success
          </Text>
          <Text icon={<ReactIcon />} tone="critical">
            Critical
          </Text>
          <Text icon={<ReactIcon />} color="orange10">
            Custom color
          </Text>
        </Cluster>
      </Doc.Example>
      <Doc.Description>Alignment</Doc.Description>
      <Doc.Example>
        <Text textAlign="left">Left</Text>
        <Text textAlign="center">Center</Text>
        <Text textAlign="right">Right</Text>
        <Doc.Description>Responsive</Doc.Description>
        <Text
          textAlign={{ mobile: "right", tablet: "left", desktop: "center" }}
        >
          Mobile right <br /> Tablet left <br /> Desktop center
        </Text>
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
      </Doc.Example>
    </Doc>
  );
};

export default TextPage;
