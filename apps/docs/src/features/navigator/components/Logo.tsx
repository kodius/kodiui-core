import { Box } from "@kodiui/ui";
import Image from "next/image";
import React from "react";
import { PlaneSvg } from "..";

export const Logo = () => {
  return (
    <Box py="xl">
      <Image src={PlaneSvg} alt="plane" />
    </Box>
  );
};
