import { SpacingKeys, gapSpacing } from "@tailwind";
import classNames from "classnames";
import React, { FC, ReactNode } from "react";

interface StackProps {
  children: ReactNode;
  gap?: SpacingKeys;
  className?: string;
}

export const Stack: FC<StackProps> = ({ children, gap = "sm", className }) => {
  const stackClass = `flex flex-col justify-start ${gapSpacing[gap]}`;
  return <div className={classNames(stackClass, className)}>{children}</div>;
};
