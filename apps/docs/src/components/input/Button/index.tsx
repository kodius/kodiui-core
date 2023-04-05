import { Text } from "@/components/typography/Text";
import { Box, BoxProps } from "@kodiui/ui";
import React, { FC } from "react";
import { buttonRecipe } from "./button.css";
import { Loading } from "./Loading";

interface Props {
  variant?: "solid" | "ghost" | "soft" | "transparent";
  size?: "standard" | "small";
  loading?: boolean;
}

type ButtonType = BoxProps & Props;

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

  return (
    <Box
      as="button"
      position="relative"
      className={buttonRecipe({ variant: props.variant, size: props.size })}
      {...props}
    >
      {children}
      {props.loading && loadingComponent}
    </Box>
  );
};
