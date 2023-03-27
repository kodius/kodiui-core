import { FC } from "react";
import { Box } from "./Box";
import { BoxProps } from "./Box/Box";

export const Cluster: FC<Omit<BoxProps, "display">> = (props) => {
  return (
    <Box
      display="flex"
      flexWrap={props.flexWrap || "wrap"}
      justifyContent="flex-start"
      alignItems="center"
      gap={props.gap || "sm"}
      {...props}
    >
      {props.children}
    </Box>
  );
};
