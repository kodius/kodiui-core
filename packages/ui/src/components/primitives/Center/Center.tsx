import { FC } from "react";
import { AnimationsKeys } from "../../../styles/tokens/animations";
import { BoxProps, Box } from "../Box/Box";
import { centerVariants } from "./center.css";

type Direction = keyof typeof centerVariants;

export const Center: FC<
  Omit<BoxProps, AnimationsKeys> & {
    direction?: Direction;
  }
> = (props) => {
  return (
    <Box
      width={props.width || "fit"}
      className={centerVariants[props.direction || "horizontal"]}
      {...props}
    >
      {props.children}
    </Box>
  );
};
