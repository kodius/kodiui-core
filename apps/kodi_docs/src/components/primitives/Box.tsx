import { SpacingKeys, gapSpacing, paddingSpacing } from "@tailwind";
import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";

interface BoxProps extends PropsWithChildren {
  p?: SpacingKeys;
  className?: string;
}

export const Box: FC<BoxProps> = ({ children, p = "sm", className }) => {
  const boxClass = `${paddingSpacing[p]}`;
  return <div className={(classNames(boxClass), className)}>{children}</div>;
};
