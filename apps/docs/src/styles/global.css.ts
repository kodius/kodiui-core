import { globalStyle } from "@vanilla-extract/css";

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("a:hover", {
  textDecoration: "underline",
});
