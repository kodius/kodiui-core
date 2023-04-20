import { SpaceSize } from "./Drawer";

export type ValidSpace = keyof typeof SpaceSize;

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  width?: ValidSpace;
  side?: "left" | "right";
  title: string;
  description?: JSX.Element;
}

export enum DrawerState {
  Open = "open",
  Closing = "closing",
  Closed = "closed",
}
