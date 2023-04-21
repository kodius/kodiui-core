import { Box, BoxProps } from "@kodiui/ui";
import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";
import { buttonRecipe, buttonStyle, ButtonVariants } from "./buttonLink.css";

interface Props {
  icon?: JSX.Element;
  side?: "left" | "right";
  href: string;
}

type ButtonType = BoxProps & Props & ButtonVariants;

export const ButtonLink: FC<ButtonType> = (props) => {
  const recipe = buttonRecipe({
    variant: props.variant,
    size: props.size || "standard",
    tone: props.tone,
  });

  if (props.icon) {
    return (
      <Link href={props.href}>
        <Box
          as="button"
          display="flex"
          alignItems="center"
          gap="xxs"
          className={classNames(buttonStyle, recipe)}
          {...props}
        >
          {props.side === "left" && props.icon}
          {props.children}
          {props.side === "right" && props.icon}
        </Box>
      </Link>
    );
  }

  return (
    <Link href={props.href}>
      <Box as="button" className={recipe} {...props}>
        {props.children}
      </Box>
    </Link>
  );
};

ButtonLink.defaultProps = {
  side: "left",
};
