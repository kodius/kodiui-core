import { Box, BoxProps } from "@kodiui/ui";
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
  const loadingComponent = loading ? <Loading /> : null;

  const recipe = buttonRecipe({
    variant: props.variant,
    size: props.size || "standard",
    tone: props.tone,
  });

  const children = (
    <Box
      style={{ transition: "0.2s ease opacity" }}
      opacity={loading ? "0" : "1"}
    >
      {props.children}
    </Box>
  );

  if (props.icon) {
    return (
      <Box
        as="button"
        position="relative"
        display="flex"
        alignItems="center"
        gap="xxs"
        className={classNames(buttonStyle, recipe)}
        {...props}
      >
        {props.side === "left" && props.icon}
        {children}
        {props.side === "right" && props.icon}
        {loadingComponent}
      </Box>
    );
  }

  return (
    <Box as="button" position="relative" className={recipe} {...props}>
      {children}
      {loadingComponent}
    </Box>
  );
};

Button.defaultProps = {
  side: "left",
  // loading: false
};
