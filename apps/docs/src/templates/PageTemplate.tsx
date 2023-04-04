import { Heading } from "@/components";
import { Box, Stack } from "@kodiui/ui";
import React, { FC, PropsWithChildren } from "react";

type PageProps = {
  title: string;
};

export const PageTemplate: FC<PropsWithChildren & PageProps> = (props) => {
  return (
    <Box p={{ mobileExtraSmall: "sm", tablet: "3xl" }}>
      <Box paddingTop={{ mobileExtraSmall: 0, tablet: "3xl" }} />
      <Stack gap="lg">
        <Heading.H1>{props.title}</Heading.H1>
        <Stack>{props.children}</Stack>
      </Stack>
    </Box>
  );
};
