import { vars } from "@kodiui/ui";
import { globalStyle } from "@vanilla-extract/css";


globalStyle("body", {
  background: vars.colors.green5,
});

globalStyle("*", {
  transition: "background 0.2s ease",
});

globalStyle("p, h1, h2, h3, h4, h5, h6 ", {
  transition: "color 0.3s ease ",
});

