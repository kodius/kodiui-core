import { OpenConfigurator } from "@/features/configurator";
import { Cluster } from "@kodiui/ui";
import React from "react";
import { SwitchThemeMode } from "./SwitchThemeMode";

export const Footer = () => {
  return (
    <Cluster gap="0">
      <SwitchThemeMode />
      <OpenConfigurator />
    </Cluster>
  );
};
