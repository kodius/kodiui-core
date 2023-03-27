import { FC } from "react";
import { BuilderInterface } from "../../types";
import { Builder } from "../Builder";

export const Stack: FC<Omit<BuilderInterface, "display">> = (props) => {
  return (
    <Builder display="flex" flexDirection="column" gap={props.gap || "sm"}>
      {props.children}
    </Builder>
  );
};
