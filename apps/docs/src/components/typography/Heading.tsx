import { Typography } from "@kodiui/ui";
import { FC, PropsWithChildren } from "react";

export const HeadingH2: FC<PropsWithChildren> = (props) => {
  return <Typography as="h2">{props.children}</Typography>;
};
