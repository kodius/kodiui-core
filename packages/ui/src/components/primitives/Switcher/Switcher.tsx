import { FC } from "react";
import { Box, BoxProps } from "../Box/Box";
import { SwitherStyle } from "./styles.css";

export const Switcher: FC<Omit<BoxProps, "display">> = (props) => {
  return (
    <Box
      display="flex"
      gap={props.gap || "sm"}
      flexWrap={props.flexWrap || "wrap"}
      className={SwitherStyle}
      {...props}
    >
      {props.children}
    </Box>
  );
};
