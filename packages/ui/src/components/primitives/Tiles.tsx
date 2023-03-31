import { FC } from "react";
import { Box } from "./Box";
import { BoxProps } from "./Box/Box";

export const Tiles: FC<Omit<BoxProps, "display">> = (props) => {
  return (
    <Box
      display="grid"
      {...props}
    >
      {props.children}
    </Box>
  );
};
