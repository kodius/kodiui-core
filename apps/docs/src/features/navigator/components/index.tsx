import { Box, Stack } from "@kodiui/ui";
import React from "react";
import { navigatorLinks } from "../assets/navigatorLinks";
import { Desktop } from "./Desktop";
import { Footer } from "./Footer";
import { Mobile } from "./Mobile";
import { NavigatorItem } from "./NavigatorItem";

export const Navigator = () => {
  const links = navigatorLinks.map((nav) => (
    <React.Fragment key={nav.id}>
      <NavigatorItem {...nav} />
      <Box paddingBottom="md" />
    </React.Fragment>
  ));

  const content = (
    <Stack gap="xs">
      {links}
      <Footer />
    </Stack>
  );

  return (
    <>
      <Desktop>{content}</Desktop>
      <Mobile>{content}</Mobile>
    </>
  );
};
