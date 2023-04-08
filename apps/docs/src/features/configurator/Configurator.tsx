import { Drawer } from "@/components";
import React from "react";
import { useConfiguratorStore } from "./store/useConfiguratorStore";

export const Configurator = () => {
  const { isConfiguratorOpen, setConfiguratorState } = useConfiguratorStore();

  const onClose = () => setConfiguratorState(false);

  return (
    <Drawer title="Configurator" open={isConfiguratorOpen} onClose={onClose}>
      data
    </Drawer>
  );
};
