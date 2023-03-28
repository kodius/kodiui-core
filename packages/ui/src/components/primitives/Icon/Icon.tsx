import { FC } from "react";
import { Box, BoxProps } from "../Box/Box";

export const Icon: FC<Omit<BoxProps, "display">> = (props) => {
  return (
    <Box
      __width={"1cap"}
      __height={"1cap"}
      {...props}
    >
      {props.children}
    </Box>
  );
};
