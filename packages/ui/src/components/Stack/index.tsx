// import { createBox } from "@dessert-box/react";
import { FC, PropsWithChildren } from "react";
import { Box } from "../Box";

export const Stack: FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} {...rest}>
      {children}
    </Box>
  );
};

// export const Stack2 = createBox({atoms: stackStyle})
