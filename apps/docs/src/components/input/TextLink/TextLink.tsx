import { Box } from "@kodiui/ui";
import Link, { LinkProps } from "next/link";
import React, { FC, PropsWithChildren } from "react";
import {
  textLinkRecipe,
  textLinkStyle,
  TextLinkVariants,
} from "./textLink.css";

type Props = FC<
  PropsWithChildren & LinkProps & TextLinkProps & TextLinkVariants
>;

type TextLinkProps = {
  icon?: JSX.Element;
  side?: "right" | "left";
};

export const TextLink: Props = ({ children, ...props }) => {
  const recipe = textLinkRecipe({
    size: props.size,
    weight: props.weight,
  });

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
        <Link className={recipe} {...props}>
          {children}
        </Link>
        {props.side === "right" && <>{props.icon}</>}
      </Box>
    );
  }
  return (
    <Link className={recipe} {...props}>
      {children}
    </Link>
  );
};

TextLink.defaultProps = {
  side: "left",
};
