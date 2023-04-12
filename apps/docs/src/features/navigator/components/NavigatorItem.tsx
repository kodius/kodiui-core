import { Ident, Text2, TextLink } from "@/components";
import React, { FC } from "react";
import { Navigator } from "../types";

export const NavigatorItem: FC<Navigator> = (props) => {
  const children = props.children?.map((nav) => (
    <NavigatorItem key={nav.id} {...nav} />
  ));

  if (props.isParent) {
    return (
      <>
        <Text2 textTransform="uppercase" size="small" color="gray12">
          {props.name}
        </Text2>
        {children}
      </>
    );
  }

  if (props.href) {
    return (
      <Ident space="xs">
        <Text2 tone="brand" weight="strong">
          <TextLink href={props.href}>{props.name}</TextLink>
        </Text2>
      </Ident>
    );
  }

  return null;
};
