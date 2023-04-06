import { Text } from "@/components/typography/Text";
import { Box, BoxProps, vars } from "@kodiui/ui";
import React, { FC } from "react";
import { buttonRecipe, ButtonVariants } from "./button.css";
import { Loading } from "./Loading";

interface Props {
  loading?: boolean;
}

type ButtonType = BoxProps & Props & ButtonVariants;

export const Button: FC<ButtonType> = (props) => {
  const loadingComponent = <Loading />;

  const children = (
    <Box
      style={{ transition: "0.2s ease all" }}
      opacity={props.loading ? "0" : "1"}
    >
      <Text.Caption>{props.children}</Text.Caption>
    </Box>
  );

  console.log(vars.colors.brand);
  return (
    <Box
      as="button"
      position="relative"
      className={buttonRecipe({
        variant: props.variant,
        size: props.size,
        tone: props.tone,
      })}
      {...props}
    >
      {children}
      {props.loading && loadingComponent}
    </Box>
  );
};
