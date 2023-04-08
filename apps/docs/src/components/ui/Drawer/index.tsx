import { Box, FlexBox, Stack } from "@kodiui/ui";
import React, { FC, PropsWithChildren, useState } from "react";
import { Header } from "./Header";
import { DrawerProps, DrawerState } from "./types";
import { useDrawer } from "./useDrawer";

export const SpaceSize = {
  sm: 700,
  md: 940,
  lg: 1200,
} as const;

export const Drawer: FC<PropsWithChildren & DrawerProps> = (props) => {
  const [drawerState, setDrawerState] = useState<DrawerState>(
    props.open ? DrawerState.Open : DrawerState.Closed
  );

  const {
    backdropAnimation,
    drawerSide,
    getAnimation,
    handleAnimationEnd,
    isDrawerStateClosed,
  } = useDrawer(props, drawerState, setDrawerState);

  if (isDrawerStateClosed()) return null;

  // TODO Dont scroll body
  // https://www.npmjs.com/package/react-remove-scroll

  return (
    <Box
      position="fixed"
      width="screen"
      height="screen"
      zIndex="10"
      top="0"
      left="0"
    >
      <FlexBox
        position="relative"
        zIndex="20"
        justifyContent={drawerSide}
        height="full"
      >
        <Box
          background="blackA10"
          position="absolute"
          width="full"
          height="full"
          zIndex="10"
          onClick={props.onClose}
          className={backdropAnimation}
        />
        <Box
          __maxWidth={props.width ? SpaceSize[props.width] : SpaceSize.md}
          p="2xl"
          width="full"
          zIndex="20"
          background="body"
          boxShadow="shadow-3"
          className={getAnimation(drawerState)}
          onAnimationEnd={handleAnimationEnd}
          overflow="auto"
        >
          <Stack>
            <Header
              onClose={props.onClose}
              title={props.title}
              description={props.description}
            />
            <div>{props.children}</div>
          </Stack>
        </Box>
      </FlexBox>
    </Box>
  );
};
