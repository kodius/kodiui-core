import { Heading, Ident, Text } from "@/components";
import { Cluster } from "@kodiui/ui";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Navigator } from "../types";

export const NavigatorItem: FC<Navigator> = (props) => {
  const children = props.children?.map((nav) => (
    <NavigatorItem key={nav.id} {...nav} />
  ));

  if (props.isParent) {
    return (
      <>
        <Text.Sub>{props.name}</Text.Sub>
        {children}
      </>
    );
  }

  if (props.href) {
    return (
      <Ident space="xs">
        <Link href={props.href}>
          <Cluster gap="xs">
            {props.icon && <Image width="25" src={props.icon} alt="icon" />}
            <Heading level="h6">{props.name}</Heading>
          </Cluster>
        </Link>
      </Ident>
    );
  }

  return null;
};
