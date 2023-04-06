import { Button } from "@/components";
import { useThemeStore } from "@/features/theme";
import { Animation } from "@kodiui/ui";
import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";
import { MoonSvg, SunSvg } from "..";

const WIDTH = "20";

export const SwitchThemeMode = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isLight = theme === "light";

  const onClick = () => toggleTheme();

  if (isLight) {
    return (
      <Action onClick={onClick}>
        <Animation animationDuration="0.4s" animation="fadeIn">
          <Image src={SunSvg} alt="sun" width={WIDTH} />
        </Animation>
      </Action>
    );
  }
  return (
    <Action onClick={onClick}>
      <Animation animationDuration="0.4s" animation="fadeInBloom">
        <Image src={MoonSvg} alt="sun" width={WIDTH} />
      </Animation>
    </Action>
  );
};

const Action: FC<PropsWithChildren & { onClick: () => void }> = (props) => (
  <Button onClick={props.onClick} variant="transparent" size="sm" width="fit" >
    {props.children}
  </Button>
);
