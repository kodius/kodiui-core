import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";

interface StackProps extends PropsWithChildren {
  direction: "horizontal" | "vertical" | "center";
  className?: string;
}

export const Center: FC<StackProps> = ({
  children,
  direction = "horizontal",
  className,
}) => {
  const horizontalClass = `mx-auto w-fit`;
  const verticalClass = `flex items-center h-full w-full`;
  const centerClass = `flex items-center justify-center h-full w-full`;

  if (direction === "horizontal") {
    return (
      <div className={classNames(horizontalClass, className)}>{children}</div>
    );
  }
  if (direction === "vertical") {
    return (
      <div className={classNames(verticalClass, className)}>{children}</div>
    );
  }
  if (direction === "center") {
    return <div className={classNames(centerClass, className)}>{children}</div>;
  }
  return null;
};
