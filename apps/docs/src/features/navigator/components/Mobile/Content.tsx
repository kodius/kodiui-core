import { Animation, Box, Stack } from "@kodiui/ui";
import React, { FC, PropsWithChildren } from "react";
import { useNavigatorStore } from "@/features/navigator";

export const Content: FC<PropsWithChildren> = (props) => {
  const { isNavigatorVisible: isVisible } = useNavigatorStore();
  if (!isVisible) return null;
  return (
    <Animation animation='fadeIn' animationDuration="0.3s">
      <Box
        p="md"
        width="screen"
        position="absolute"
        background="white"
        left={0}
        height="screen"
      >
        <Stack>{props.children}</Stack>
      </Box>
    </Animation>
  );
};
