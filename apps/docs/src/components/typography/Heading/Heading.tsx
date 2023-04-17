import { Box, BoxProps } from "@kodiui/ui";
import React, { FC, PropsWithChildren } from "react";
import { headingRecipe, HeadingVariants } from "./heading.css";

type HeadingLevels = "1" | "2" | "3" | "4";

type HeadingProps = {
  icon?: JSX.Element;
  level: HeadingLevels;
} & BoxProps &
  HeadingVariants;

const levelsToHeading = {
  "1": "h1",
  "2": "h2",
  "3": "h3",
  "4": "h4",
  "5": "h5",
  "6": "h6",
} as const;

export const Heading: FC<PropsWithChildren & HeadingProps> = (props) => {
  return (
    <Box
      className={headingRecipe({ weight: props.weight })}
      as={levelsToHeading[props.level]}
      {...props}
    >
      {props.children}
    </Box>
  );
};
