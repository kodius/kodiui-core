import { FC } from "react";
import { AnimationsKeys } from "../../styles/tokens/animations";
import { BoxProps, Box } from "./Box/Box";

export const Center: FC<Omit<BoxProps, AnimationsKeys>> = (props) => {
  return (
           <Box mx="auto" {...props}>
      {props.children}
    </Box>
   ;
};
