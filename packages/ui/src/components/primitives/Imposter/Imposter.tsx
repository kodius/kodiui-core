import { FC } from "react";
import { BoxProps, Box } from "../Box/Box";
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
