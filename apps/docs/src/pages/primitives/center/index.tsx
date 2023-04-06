import { DocBuilder } from "@/features/docBuilder";
import { centerVariants } from "@/features/docs/center/centerVariants.docs";
import React from "react";

const Center = () => {
  return <DocBuilder title="Center" build={() => [centerVariants]} />;
};

export default Center;
