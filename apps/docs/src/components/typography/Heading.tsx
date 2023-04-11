import { Box } from "@kodiui/ui";
import { BuilderInterface } from "@kodiui/ui/dist/types";
import { PropsWithChildren } from "react";
import { headings, mobile, tablet, desktop } from "./Heading.css";
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
  | "color"
> & {
  level: keyof typeof headings;
  align?: {
    mobile?: keyof typeof mobile;
    tablet?: keyof typeof mobile;
    desktop?: keyof typeof mobile;
  };
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({
  children,
  as,
  level = "h1",
  align = {
    mobile: "left",
    tablet: "left",
    desktop: "left",
  },
  ...rest
}: PropsWithChildren<HeadingProps>) => {
  const mobileAlignment = align.mobile && mobile[align.mobile];
  const tabletAlignment = align.tablet && tablet[align.tablet];
  const desktopAlignment = align.desktop && desktop[align.desktop];
  const component = as ? as : level;
  return (
    <Box
      as={component}
      className={classNames(
        headings[level],
        mobileAlignment,
        tabletAlignment,
        desktopAlignment
      )}
      {...rest}
    >
      {children}
    </Box>
  );
};
