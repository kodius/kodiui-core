import { forwardRef } from "react";
import { BuilderInterface } from "../../types";
import { Builder } from "../Builder/Builder";

export const FlexBox = forwardRef<HTMLElement, BuilderInterface>(
  (props, ref) => (
    <Builder
      display={props.display || "flex"}
      p={props.p || "sm"}
      ref={ref}
      {...props}
    >
      {props.children}
    </Builder>
  )
);
