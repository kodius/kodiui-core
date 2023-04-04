import { Box } from "@kodiui/ui";
import React from "react";
import { navigatorLinks } from "../assets/navigatorLinks";
import { Desktop } from "./Desktop";
import { Mobile } from "./Mobile";
import { NavigatorItem } from "./NavigatorItem";

export const Navigator = () => {
  const content = navigatorLinks.map((nav) => (
    <>
      <NavigatorItem key={nav.id} {...nav} />
      <Box paddingBottom="md" />
    </>
  ));

  return (
    <>
      <Desktop>{content}</Desktop>
      <Mobile>{content}</Mobile>
    </>
  );
};
