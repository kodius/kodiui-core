import { forwardRef } from "react";
import { BuilderInterface } from "../../types";
import { Builder } from "../Builder";

export const FlexBox = forwardRef<HTMLElement, BuilderInterface>(
  (props, ref) => (
    <Builder
      display={props.display || "flex"}
      ref={ref}
      {...props}
    >
      {props.children}
    </Builder>
  )
);
