import { useThemeStore } from "@/features/theme";
import { Box } from "@kodiui/ui";
import React from "react";
import { navigatorLinks } from "../assets/navigatorLinks";
import { NavigatorItem } from "./NavigatorItem";

export const Navigator = () => {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <Box height="screen" width="60">
      <button onClick={toggleTheme}>toggle theme</button>
      {navigatorLinks.map((nav) => (
        <NavigatorItem key={nav.id} {...nav} />
      ))}
    </Box>
  );
};
