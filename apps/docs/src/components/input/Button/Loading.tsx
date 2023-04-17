import { Animation, FlexBox } from "@kodiui/ui";
import React from "react";
import { DotsBounceIcon } from "./DotsBounceIcon";

export const Loading = () => {
  return (
    <Animation animation="fadeIn">
      <FlexBox
        position="absolute"
        top="0"
        left="0"
        width="full"
        height="full"
        alignItems="center"
        justifyContent="center"
      >
        <DotsBounceIcon />
      </FlexBox>
    </Animation>
  );
};
