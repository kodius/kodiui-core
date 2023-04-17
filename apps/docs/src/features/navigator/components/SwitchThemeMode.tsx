import { MoonIcon, SunIcon } from "@/assets";
import { Button } from "@/components";
import { useThemeStore } from "@/features/theme";
import React from "react";

export const SwitchThemeMode = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isLight = theme === "light";

  const onClick = () => toggleTheme();
  if (isLight) {
    return (
      <Button
        icon={<SunIcon />}
        variant="transparent"
        size="sm"
        onClick={onClick}
      />
    );
  }
  return (
    <Button
      icon={<MoonIcon />}
      variant="transparent"
      size="sm"
      onClick={onClick}
    />
  );
};
