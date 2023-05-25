import { SpacingKeys, gapSpacing } from "@tailwind/spacing";
import React, { FC, ReactNode } from "react";

interface StackProps {
  children: ReactNode;
  space?: SpacingKeys;
  className?: string;
}

export const Stack: FC<StackProps> = ({
  children,
  space = "md",
  className,
}) => {
  return (
    <div
      className={`bg-blue-500 flex flex-col justify-start ${gapSpacing[space]} ${className}`}
    >
      {children}
    </div>
  );
};
