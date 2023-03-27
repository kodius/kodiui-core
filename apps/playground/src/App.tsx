import "@kodiui/ui/style.css";
import {
  Box,
  Center,
  Cluster,
  FlexBox,
  Split,
  Stack,
  Animation,
  Switcher,
} from "@kodiui/ui";
import { darkTheme, lightTheme } from "./contract.css";
import { FC, PropsWithChildren, useState } from "react";
import { BoxProps } from "@kodiui/ui/dist/components/primitives/Box/Box";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const isLight = theme === "light";
  return (
    <div className={isLight ? lightTheme : darkTheme}>
      <FlexBox justifyContent="flex-end">
        <Box
          as="button"
          p="xs"
          cursor="pointer"
          onClick={() => setTheme(isLight ? "dark" : "light")}
          background="purple5"
          color="purple12"
        >
          switch theme
        </Box>
      </FlexBox>
      Stack
      <Stack>
        FlexBox
        <FlexBox borderRadius="xs" flexWrap="wrap" background="sage5" p="xxl">
          <Element />
          <Element />
          <Element />
        </FlexBox>
        Cluster
        <Cluster background="orange3" p="xxl">
          <Element />
          <Element />
          <Element />
          <Element />
        </Cluster>
        Cluster with aspect ratio
        <Cluster background="orange3" p="xxl">
          <Element width="1/4"> 1/4</Element>
          <Element width="fit"> fit</Element>
          <Element width="fit"> fit </Element>
          <Element width="3/5">3/5</Element>
        </Cluster>
        Switcher
        <Switcher background="red5" p="xxl">
          <Element />
          <Element />
          <Element />
          <Element />
        </Switcher>
        Split
        <Split background="green5" p="xxl">
          <Element />
          <Element />
        </Split>
        Cetner
        <Center background="tomato5" p="xxl">
          <Element />
        </Center>
        Width - aspect ration & sizes
        <FlexBox>
          <Box width="2/6" textAlign="center">
            <Element background="purple5">width 2/6</Element>
          </Box>
          <Box width="1/6" textAlign="center">
            <Element>width 1/6</Element>
          </Box>
        </FlexBox>
        <Box width="3/6" textAlign="center">
          <Element background="sand6">width 3/6</Element>
        </Box>
        <Box width="full">
          <Element>full</Element>
        </Box>
        Animations
        <Center>
          <Animation
            animation="fadeIn"
            animationIterationCount="infinite"
            animationDirection="alternate"
            animationDuration="1s"
          >
            <Animation animation="bounce" width="fit">
              <Element>Bounce + fade in</Element>
            </Animation>
          </Animation>
        </Center>
      </Stack>
    </div>
  );
}

export default App;

const Element: FC<PropsWithChildren & BoxProps> = (props) => {
  return (
    <Box
      background={"sky7"}
      p="xs"
      boxShadow="shadow-2"
      borderRadius="sm"
      {...props}
    >
      <Box color={"sky11"}>{props.children || "Box"}</Box>
    </Box>
  );
};
