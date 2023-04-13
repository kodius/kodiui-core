import { Ident, Text, TextLink } from "@/components";
import React, { FC } from "react";
import { Navigator } from "../types";

export const NavigatorItem: FC<Navigator> = (props) => {
  const children = props.children?.map((nav) => (
    <NavigatorItem key={nav.id} {...nav} />
  ));

  if (props.isParent) {
    return (
      <>
        <Text textTransform="uppercase" size="small" color="gray12">
          {props.name}
        </Text>
        {children}
      </>
    );
  }

  if (props.href) {
    return (
      <Ident space="xs">
        <Text tone="brand" weight="strong">
          <TextLink href={props.href}>{props.name}</TextLink>
        </Text>
      </Ident>
    );
  }

  return null;
};
