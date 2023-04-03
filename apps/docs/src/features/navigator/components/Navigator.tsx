import { useThemeStore } from "@/features/theme";
import { Box, Stack } from "@kodiui/ui";
import React from "react";
import { navigatorLinks } from "../assets/navigatorLinks";
import { Logo } from "./Logo";
import { NavigatorItem } from "./NavigatorItem";

export const Navigator = () => {
  const { toggleTheme } = useThemeStore();
  const links = navigatorLinks.map((nav) => (
    <>
      <NavigatorItem key={nav.id} {...nav} />
      <Box paddingBottom="md" />
    </>
  ));

  return (
    <Box
      position={{
        mobileSmall: "fixed",
        desktop: "static",
        // tablet: "static",
      }}

      background="gray1"
      height="screen"
      width={{ mobile: "screen", desktop: "96", tablet: "96" }}
    >
      <Stack>
        <Logo />
        {links}
        <button onClick={toggleTheme}>hi</button>
      </Stack>
    </Box>
  );
};
