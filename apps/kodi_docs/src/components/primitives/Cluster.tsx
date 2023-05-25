import { Spacing } from "@types";
import React, { FC, ReactNode } from "react";

interface ClusterProps {
  children: ReactNode;
  space?: Spacing;
  className?: string;
}

export const Cluster: FC<ClusterProps> = ({
  children,
  space = "md",
  className,
}) => {
  return (
    <div
      className={`flex flex-wrap justify-start items-center gap-${space} ${className}`}
    >
      {children}
    </div>
  );
};
