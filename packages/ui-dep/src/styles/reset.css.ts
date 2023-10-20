import { globalStyle } from "@vanilla-extract/css";

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
  lineHeight: "normal",
});

globalStyle(`html, body`, {
  height: `100%`,
});

globalStyle(`body`, {
  lineHeight: 1.5,
  WebkitFontSmoothing: `antialiased`,
});

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});

globalStyle(`p, h1, h2, h3, h4, h5, h6`, {
  overflowWrap: `break-word`,
});

globalStyle(`a`, {
  color: "inherit",
  textDdecoration: "inherit",
});

globalStyle(`#root`, {
  isolation: `isolate`,
});

globalStyle("a:hover", {
  textDecoration: "underline",
  color: "inherit",
});

globalStyle("a", {
  textDecoration: "none",
});