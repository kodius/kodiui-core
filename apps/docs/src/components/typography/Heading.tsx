import { Box } from "@kodiui/ui";
import { BuilderInterface } from "@kodiui/ui/dist/types";
import { PropsWithChildren } from "react";
import { headings, mobile, tablet } from "./Heading.css";
import classNames from "classnames";

type HeadingProps = Pick<
  BuilderInterface,
  | "textAlign"
  | "fontWeight"
  | "color"
  | "textDecoration"
  | "textAlign"
  | "textTransform"
  | "cursor"
  | "as"
  | "color"
> & {
  level: keyof typeof headings;
  align?: {
    mobile: keyof typeof mobile;
    tablet: keyof typeof mobile;
  };
};

export const Heading = ({
  children,
  as = "h1",
  level = "h1",
  align = {
    mobile: "left",
    tablet: "left",
  },
  ...rest
}: PropsWithChildren<HeadingProps>) => {
  return (
    <Box
      as={as}
      className={classNames(
        headings[level],
        mobile[align.mobile],
        tablet[align.tablet]
      )}
      {...rest}
    >
      {children}
    </Box>
  );
};
