import { Box, Animation } from "@kodiui/ui";
import { FC, PropsWithChildren, useState } from "react";

export const Button: FC<PropsWithChildren> = (props) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldAnimate2, setShouldAnimate2] = useState(false);

  return (
    <Animation
      animation="shakeX"
      style={{ width: "fit-content" }}
      shouldAnimate={shouldAnimate}
    >
      <Animation
        animationIterationCount={"unset"}
        shouldAnimate={shouldAnimate2}
        onMouseOver={() => setShouldAnimate2(true)}
        onMouseOut={() => setShouldAnimate2(false)}
      >
        <Box
          color={"blue-11"}
          p={"xs"}
          px={"sm"}
          borderRadius={"sm"}
          boxShadow={shouldAnimate2 ? "shadow-2" : "shadow-3"}
          background={shouldAnimate ? "red-5" : "blue-5"}
          as={"button"}
          onClick={() => {
            setShouldAnimate(!shouldAnimate);
            setTimeout(() => {
              setShouldAnimate(false);
            }, 400);
          }}
          style={{ transition: "0.3s ease all", cursor: "pointer" }}
        >
          {props.children}
        </Box>
      </Animation>
    </Animation>
  );
};
