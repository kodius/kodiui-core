import { styleVariants } from "@vanilla-extract/css";

export const centerVariants = styleVariants({
  horizontal: {
    margin: "0 auto",
  },
  vertical: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
