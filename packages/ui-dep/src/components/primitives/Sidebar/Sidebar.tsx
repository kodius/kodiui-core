import { FC } from "react";
import { Box, BoxProps } from "../Box/Box";
import { SidebarOnLeft, SidebarOnRight } from "./sidebar.css";

interface SidebarProps {
  /**
   * default to left
   */
  side?: "left" | "right";
}

export const Sidebar: FC<Omit<BoxProps, "display"> & SidebarProps> = ({
  side = "left",
  ...props
}) => {
  const sidebarOnLeft = side === "left";
  const className = sidebarOnLeft ? SidebarOnLeft : SidebarOnRight;

  return (
    <Box
      {...props}
      className={className}
      display="flex"
      flexWrap={props.flexWrap || "wrap"}
      gap={props.gap || "sm"}
    >
      {props.children}
    </Box>
  );
};

Sidebar.displayName = "Sidebar";
