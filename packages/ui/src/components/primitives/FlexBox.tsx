import { forwardRef } from "react";
import { Box, BoxProps } from "./Box/Box";

export const FlexBox = forwardRef<HTMLElement, BoxProps>((props, ref) => (
  <Box display={props.display || "flex"} ref={ref} {...props}>
    {props.children}
  </Box>
));

FlexBox.displayName = "FlexBox"
