import { Heading } from "@/components/typography/Heading";
import { Doc } from "@/features/documentation";
import React from "react";
import { Cluster, Stack } from "@kodiui/ui";
import { Text } from "@/components/typography/Text";
import { ReactIcon } from "./ReactIcon";

const TextPage = () => {
  return (
    <Doc>
      <Doc.Example>
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
      </Doc.Example>
    </Doc>
  );
};

export default TextPage;
