import { Doc } from "@/features/documentation";

const codeSnippet = `import { vars } from "@kodiui/ui";
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
}
`;

export const ButtonCssFile = () => {
  return <Doc.CodeSnippet codeSnippet={codeSnippet} showLineNumbers={true} />;
};

export default ButtonCssFile;
