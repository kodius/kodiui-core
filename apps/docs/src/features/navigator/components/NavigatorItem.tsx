import { HeadingH2, Ident } from "@/components";
import { SpaceTypes } from "@kodiui/ui";
import React, { FC } from "react";
import { Navigator } from "../types";

export const NavigatorItem: FC<Navigator> = (props) => {
  const identSpace: SpaceTypes = props.isParent ? "0" : "sm";
  return (
    <Ident space={identSpace}>
      <HeadingH2>{props.name}</HeadingH2>
      {props.children?.map((nav) => (
        <NavigatorItem key={nav.id} {...nav} />
      ))}
    </Ident>
  );
};
