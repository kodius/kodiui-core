import { SpacingKeys, gapSpacing } from "@tailwind";
import classNames from "classnames";
import React, { FC, ReactNode } from "react";

interface ClusterProps {
  children: ReactNode;
  space?: SpacingKeys;
  className?: string;
}

export const Cluster: FC<ClusterProps> = ({
  children,
  space = "sm",
  className,
}) => {
  const clusterClass = `flex flex-wrap justify-start items-center ${gapSpacing[space]}`;
  return <div className={classNames(clusterClass, className)}>{children}</div>;
};