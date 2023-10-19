import { FC } from "react";
import { BoxProps, Box } from "./Box/Box";

export const Split: FC<Omit<BoxProps, "display">> = (props) => {
  return (
    <Box
      display="flex"
      flexWrap={props.flexWrap || "wrap"}
      justifyContent="space-between"
      gap={props.gap || "sm"}
      {...props}
    >
      {props.children}
    </Box>
  );
};
