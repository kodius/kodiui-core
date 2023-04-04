import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import { buttonStyle, ButtonVariants } from "./button.css";

type ButtonType = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variants: ButtonVariants;
};

export const Button: FC<ButtonType> = (props) => {
  return (
    <button className={buttonStyle(props.variants)} {...props}>
      {props.children}
    </button>
  );
};
