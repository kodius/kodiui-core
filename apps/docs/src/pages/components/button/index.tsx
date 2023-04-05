import { Button, Text } from "@/components";
import { DocBuilder } from "@/features/docBuilder";
import { Box, Cluster, Stack } from "@kodiui/ui";
import React from "react";

const ButtonPage = () => {
  return (
    <DocBuilder
      title="Button"
      build={() => [
        {
          label: "Folder structure",
          example: {
            component: [
              <Text.Base>
                src/components/inputs/Button <br />
                - Button.tsx <br />- button.css.ts
              </Text.Base>,
            ],
          },
        },
        {
          label: "Button Variants",
          example: {
            component: [
              <Cluster>
                <Button variant="solid">Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Cluster>,
            ],
          },
          codeSnippet: `<Cluster>
  <Button variant="solid">Solid</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="soft">Soft</Button>
  <Button variant="transparent">Transparent</Button>
</Cluster>`,
        },

        {
          label: "Button sizes",
          example: {
            label: ["Base size", "Small size"],
            component: [
              <Cluster>
                <Button variant="solid">Solid</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="transparent">Transparent</Button>
              </Cluster>,
              <Cluster>
                <Button variant="solid" size="small">
                  Solid
                </Button>
                <Button variant="ghost" size="small">
                  Ghost
                </Button>
                <Button variant="soft" size="small">
                  Soft
                </Button>
                <Button variant="transparent" size="small">
                  Transparent
                </Button>
              </Cluster>,
            ],
          },
          codeSnippet: `<Cluster>
  <Button variant="solid">Solid</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="soft">Soft</Button>
  <Button variant="transparent">Transparent</Button>
</Cluster>,
<Cluster>
  <Button variant="solid" size="small">
    Solid
  </Button>
  <Button variant="ghost" size="small">
    Ghost
  </Button>
  <Button variant="soft" size="small">
    Soft
  </Button>
  <Button variant="transparent" size="small">
    Transparent
  </Button>
</Cluster>,`,
        },
        {
          label: "Button.tsx",
          isCodeOpen: true,
          codeSnippet: `import { Text } from "@/components/typography/Text";
import { Box, BoxProps } from "@kodiui/ui";
import React, { FC } from "react";
import { buttonRecipe } from "./button.css";

interface Props {
  variant?: "solid" | "ghost" | "soft" | "transparent";
  size?: "standard" | "small";
}

type ButtonType = BoxProps & Props;

export const Button: FC<ButtonType> = (props) => {
  return (
    <Box
      as="button"
      className={buttonRecipe({ variant: props.variant, size: props.size })}
      {...props}
    >
      <Text.Caption>{props.children}</Text.Caption>
    </Box>
  );
};`,
        },
        {
          label: "button.css.ts",
          isCodeOpen: true,
          codeSnippet: `import { vars } from "@kodiui/ui";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const buttonRecipe = recipe({
  base: {
    borderRadius: vars.borderRadius.sm,
    color: vars.colors.indigo9,
    border:  vars.borderWidth.md } solid  vars.colors.indigo9 ,
    transition: all 0.2s ease,
    cursor: "pointer",
    ":hover": {
      background: vars.colors.indigo3,
    },
    ":active": {
      transform: "scale(0.95)"
    },
  },

  variants: {
    variant: {
      solid: {
        background: vars.colors.indigo9,
        color: vars.colors.white,
        ":hover": {
          background: vars.colors.indigo10,
          borderColor: vars.colors.indigo10,
        },
      },
      ghost: {
        background: vars.colors.white,
      },
      soft: {
        background: vars.colors.indigo3,
        borderColor: "transparent",
        ":hover": {
          background: vars.colors.indigo4,
        },
      },
      transparent: { background: "transparent", borderColor: "transparent" },
    },
    size: {
      small: { padding: vars.space.xxs vars.space.xs },
      standard: { padding: vars.space.xs vars.space.sm },
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "standard",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
        `,
        },
      ]}
    />
  );
};

export default ButtonPage;
