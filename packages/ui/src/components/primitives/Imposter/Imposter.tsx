import { FC } from "react";
import { Box } from "../Box";
import { BoxProps } from "../Box/Box";
import { imposterStyle } from "./imposter.css";

export const Imposter: FC<Omit<BoxProps, "display">> = (props) => {
  return (
    <Box
      position="absolute"
      className={imposterStyle}
      {...props}
    >
      {props.children}
    </Box>
  );
};
