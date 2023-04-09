import { Box, FlexBox } from "@kodiui/ui";
import Link, { LinkProps } from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { textLinkStyle } from "./textLink.css";

type Props = FC<PropsWithChildren & LinkProps & TextLinkProps>;

type TextLinkProps = {
  icon?: JSX.Element;
  side?: "right" | "left";
};

export const TextLink: Props = ({ children, ...props }) => {
  if (props.icon) {
    return (
      <Box
        as="span"
        display="flex"
        gap="xxs"
        alignItems="center"
        className={textLinkStyle}
      >
        {props.side === "left" && <>{props.icon}</>}
        <Link {...props}>{children}</Link>
        {props.side === "right" && <>{props.icon}</>}
      </Box>
    );
  }
  return <Link {...props}>{children}</Link>;
};

TextLink.defaultProps = {
  side: "left",
};
