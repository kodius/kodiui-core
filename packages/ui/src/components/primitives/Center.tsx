import { FC } from "react";
import { AnimationsKeys } from "../../styles/tokens/animations";
import { BoxProps, Box } from "./Box/Box";

export const Center: FC<Omit<BoxProps, AnimationsKeys>> = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {props.children}
    </Box>
  );
};
