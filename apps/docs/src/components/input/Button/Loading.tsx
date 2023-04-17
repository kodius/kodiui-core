import { Animation, FlexBox } from "@kodiui/ui";
import React from "react";
import { DotsBounceIcon } from "./DotsBounceIcon";

export const Loading = () => {
  return (
    <Animation animation="fadeIn">
      <FlexBox
        alignItems="center"
        justifyContent="center"
      >
        <DotsBounceIcon />
      </FlexBox>
    </Animation>
  );
};
