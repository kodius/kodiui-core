import { Heading } from "@/components/typography/Heading";
import { Doc } from "@/features/documentation";
import React from "react";
import { Cluster, Stack, Box } from "@kodiui/ui";
import { Text } from "@/components/typography/Text";
import { ReactIcon } from "./ReactIcon";

const TextPage = () => {
  return (
    <Doc>
      <Doc.Title>Text</Doc.Title>
      <Box height="6" />
      <Doc.Subtitle>Tones</Doc.Subtitle>
      <Doc.Example>
        <Cluster>
          <Text tone="brand">Brand</Text>
          <Text tone="brandAccent">BrandAccent</Text>
          <Text tone="critical">Critical</Text>
          <Text tone="info">Info</Text>
          <Text tone="success">Success</Text>
        </Cluster>
      </Doc.Example>
      <Doc.Subtitle>With Icons</Doc.Subtitle>
      <Doc.Example>
        <Stack gap="xl">
          <Stack gap="xs">
            <Doc.Subtitle>Left Aligned Icon</Doc.Subtitle>
            <Cluster>
              <Text tone="brand">
                <ReactIcon />
                Text
              </Text>
              <Text tone="brandAccent">
                <ReactIcon />
                Text
              </Text>
              <Text tone="critical">
                <ReactIcon />
                Text
              </Text>
              <Text tone="info">
                <ReactIcon />
                Text
              </Text>
              <Text tone="success">
                <ReactIcon />
                Text
              </Text>
            </Cluster>
          </Stack>
          <Stack gap="xs">
            <Doc.Subtitle>Right Aligned Icon</Doc.Subtitle>
            <Cluster>
              <Text tone="brand">
                Text
                <ReactIcon />
              </Text>
              <Text tone="brandAccent">
                Text
                <ReactIcon />
              </Text>
              <Text tone="critical">
                Text
                <ReactIcon />
              </Text>
              <Text tone="info">
                Text
                <ReactIcon />
              </Text>
              <Text tone="success">
                Text
                <ReactIcon />
              </Text>
            </Cluster>
          </Stack>
        </Stack>
      </Doc.Example>
    </Doc>
  );
};

export default TextPage;
