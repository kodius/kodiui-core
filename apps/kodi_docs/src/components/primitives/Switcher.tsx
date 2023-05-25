import { SpacingKeys, gapSpacing } from "@tailwind";
import classNames from "classnames";
import React, { FC, ReactNode } from "react";

interface ClusterProps {
  children: ReactNode;
  space?: SpacingKeys;
  className?: string;
}

export const Switcher: FC<ClusterProps> = ({
  children,
  space = "sm",
  className,
}) => {
  const switcherClass = `flex flex-wrap justify-start items-center [&>*]:grow ${gapSpacing[space]}`;
  return <div className={classNames(switcherClass, className)}>{children}</div>;
};
