import { Button } from "@/components/input/Button";
import { Heading } from "@/components/typography/Heading";
import { Box, Split } from "@kodiui/ui";
import React, { FC, PropsWithChildren } from "react";
import { DrawerProps } from "./types";

type Props = Pick<DrawerProps, "description" | "title" | "onClose">;

export const Header: FC<Props> = (props) => {
  if (props.description) {
    return (
      <WithClose onClose={props.onClose}>
        <div>
          <Heading.H1>{props.title}</Heading.H1>
          {props.description}
        </div>
      </WithClose>
    );
  }
  return (
    <WithClose onClose={props.onClose}>
      <Heading.H1>{props.title}</Heading.H1>
    </WithClose>
  );
};

type WithCloseProps = PropsWithChildren & Pick<DrawerProps, "onClose">;

const WithClose: FC<WithCloseProps> = (props) => {
  return (
    <Split>
      {props.children}
      <Button onClick={props.onClose} variant="transparent" tone="neutral">
        close
      </Button>
    </Split>
  );
};
