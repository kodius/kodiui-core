import { Animation, Box, BoxProps } from "@kodiui/ui";
import classNames from "classnames";
import React, { FC } from "react";
import { buttonRecipe, buttonStyle, ButtonVariants } from "./button.css";
import { Loading } from "./Loading";

interface Props {
  loading?: boolean;
  icon?: JSX.Element;
  side?: "left" | "right";
}

type ButtonType = BoxProps & Props & ButtonVariants;

export const Button: FC<ButtonType> = ({ loading, ...props }) => {
  const children = !loading ? (
    props.children
  ) : (
    <Animation animation="fadeIn">{props.children}</Animation>
  );

  const content = loading ? <Loading /> : children;

  const recipe = buttonRecipe({
    variant: props.variant,
    size: props.size || "standard",
    tone: props.tone,
  });

  if (props.icon) {
    return (
      <Box
        as="button"
        display="flex"
        alignItems="center"
        gap="xxs"
        className={classNames(buttonStyle, recipe)}
        {...props}
      >
        {props.side === "left" && props.icon}
        {content}
        {props.side === "right" && props.icon}
      </Box>
    );
  }

  return (
    <Box as="button" className={recipe} {...props}>
      {content}
    </Box>
  );
};

Button.defaultProps = {
  side: "left",
};
