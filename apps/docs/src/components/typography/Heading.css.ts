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

export const mobile = styleVariants({
  left: {
    "@media": {
      "screen and (max-width: 768px)": {
        textAlign: "left",
      },
    },
  },
  right: {
    "@media": {
      "screen and (max-width: 768px)": {
        textAlign: "right",
      },
    },
  },
  center: {
    "@media": {
      "screen and (max-width: 768px)": {
        textAlign: "center",
      },
    },
  },
});

export const tablet = styleVariants({
  left: {
    "@media": {
      "screen and (max-width: 1024px) and (min-width: 768px)": {
        textAlign: "left",
      },
    },
  },
  right: {
    "@media": {
      "screen and (max-width: 1024px) and (min-width: 768px)": {
        textAlign: "right",
      },
    },
  },
  center: {
    "@media": {
      "screen and (max-width: 1024px) and (min-width: 768px)": {
        textAlign: "center",
      },
    },
  },
});

export const desktop = styleVariants({
  left: {
    "@media": {
      "screen and (min-width: 1024px)": {
        textAlign: "left",
      },
    },
  },
  right: {
    "@media": {
      "screen and (min-width: 1024px)": {
        textAlign: "right",
      },
    },
  },
  center: {
    "@media": {
      "screen and (min-width: 1024px)": {
        textAlign: "center",
      },
    },
  },
});
