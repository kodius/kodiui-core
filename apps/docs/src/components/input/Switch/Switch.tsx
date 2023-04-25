import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { switchRoot, switchThumb } from "./Switch.css";
import classNames from "classnames";

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={classNames(switchRoot, className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={switchThumb} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;
