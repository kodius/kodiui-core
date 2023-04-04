import { PageTemplate } from "@/templates";
import { Box } from "@kodiui/ui";
import React from "react";

const BoxPage = () => {
  return (
    <PageTemplate
      title="Box"
      build={() => [
        {
          label: "Box with background",
          example: <BoxExmaple />,
          code: `
<Box p="md" background="red6">
  Box
</Box>
          `,
        },
        {
          label: "Box with border",
          example: <BoxExmaple />,
        },
      ]}
    />
  );
};

const BoxExmaple = () => {
  return (
    <Box p="md" background="red5">
      Box
    </Box>
  );
};

export default BoxPage;
