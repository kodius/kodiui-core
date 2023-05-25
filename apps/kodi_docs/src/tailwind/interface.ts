import { PropsWithChildren } from "react";
import { SpacingKeys } from "./vars";

type Default = {
  className?: string;
};

export type Enhancer = PropsWithChildren &
  Default & {
    gap?: SpacingKeys;
    p?: SpacingKeys;
  };
