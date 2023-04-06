import { Text } from "@/components/typography/Text";
import { Box, BoxProps } from "@kodiui/ui";
import React, { FC } from "react";
import { buttonRecipe2, ButtonVariants2 } from "./button2.css";
import { Loading } from "./Loading";

interface Props {
  loading?: boolean;
}

type ButtonType = BoxProps & Props & ButtonVariants2;

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
      className={buttonRecipe2({
        variant: props.variant,
        size: props.size || "standard",
        tone: props.tone,
      })}
      {...props}
    >
      {children}
      {props.loading && loadingComponent}
    </Box>
  );
};
