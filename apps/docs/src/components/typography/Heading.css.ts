import { vars } from "@kodiui/ui";
import { styleVariants } from "@vanilla-extract/css";

export const headings = styleVariants({
  h1: {
    fontSize: vars.fontSize["4xl"],
  },
  h2: { fontSize: vars.fontSize["3xl"] },
  h3: { fontSize: vars.fontSize["2xl"] },
  h4: { fontSize: vars.fontSize["xl"] },
  h5: { fontSize: vars.fontSize["lg"] },
  h6: { fontSize: vars.fontSize["base"] },
});
