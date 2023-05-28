export const position = {
  absolute: "absolute",
  relative: "relative",
  static: "static",
  fixed: "fixed",
  sticky: "sticky",
}

export const display = {
  block: "block",
  inlineBlock: "inline-block",
  inline: "inline",
  flex: "flex",
  hidden: "hidden",
  grid: "grid",
}

export const flexDirection = {
  row: "flex-row",
  rowReverse: "flex-row-reverse",
  col: "flex-col",
  colReverse: "flex-col-reverse",
}

export const flexWrap = {
  wrap: "flex-wrap",
  wrapReverse: "flex-wrap-reverse",
  nowrap: "flex-nowrap",
}

export const justifyContent = {
  normal: "justify-normal",
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  strech: "justify-stretch",
}

export const alignItems = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
}

export const zIndex = {
  "0": "z-0",
  "10": "z-10",
  "20": "z-20",
  "30": "z-30",
  "40": "z-40",
  "50": "z-50",
  auto: "z-auto",
}

export type JustifyContent = keyof typeof justifyContent
