import { Button } from "@/components";
import { Animation, Box, Cluster } from "@kodiui/ui";
import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";
import { MenuSvg, useNavigatorStore } from "../..";
import { Logo } from "../Logo";
import { Content } from "./Content";

export const Mobile: FC<PropsWithChildren> = (props) => {
  const { toggleNavigator } = useNavigatorStore();

  const toggleContent = () => toggleNavigator();

  return (
    <Box
      display={{
        mobileExtraSmall: "block",
        mobileSmall: "block",
        tablet: "none",
      }}
    >
      <Cluster gap="xs">
        <Animation animation="fadeInBloom" animationDuration="0.3s">
          <Button onClick={toggleContent} variant="ghost">
            <Image src={MenuSvg} alt="menu" width="25" />
          </Button>
        </Animation>
        <Logo />
      </Cluster>
      <Content>{props.children}</Content>
    </Box>
  );
};
